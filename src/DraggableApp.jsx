import { useState, useRef } from 'react';
import TodoItem from './TodoItem';
import './App.css';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';

export default function DraggableApp() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const nextId = useRef(1);

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;
    
    const newTodo = {
      id: nextId.current,
      title: newTodoTitle,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
    nextId.current += 1;
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodoTitle = (id, newTitle) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const getTodoPosition = (id) =>  todos.findIndex((todo) => todo.id === id);
  const handleDragEnd = ({active, over}) => {
    if(active.id === over.id) return;
    setTodos(todos =>{
      const originalPosition = getTodoPosition(active.id);
      const newPosition = getTodoPosition(over.id);
      return arrayMove(todos,originalPosition,newPosition)
    })
  }
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter: sortableKeyboardCoordinates
    })
  )
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
      
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <ul className="todo-list">
          <SortableContext items={todos} strategy={verticalListSortingStrategy}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                updateTodoTitle={updateTodoTitle}
              />
            ))}
          </SortableContext>

        </ul>
      </DndContext>

    </div>
  );
}
