
import { useRef, useState } from 'react';
import './App.css';
import { Todo } from './Todo';
export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const nextId = useRef(0);
    const addTodo = (e)=>{
        e.preventDefault();
        nextId.current += 1;
        const todo = {
            id: nextId.current,
            title: newTodoTitle,
            isCompleted: false
        }
        setNewTodoTitle("");
        setTodos([...todos,todo])
    }

    function editTodo(id,newTitle){
        console.log(id,newTitle);
        
        setTodos(todos.map(todo => todo.id === id ? {...todo,title: newTitle} : todo))
    }
    function toggleTodoStatus(id,newStatus){
        setTodos(todos.map(todo => todo.id === id ? {...todo,isCompleted: newStatus} : todo))
    }
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
        <ul className="todo-list">
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                toggleTodoStatus={toggleTodoStatus}
                editTodo={editTodo}
              />
            ))}
        </ul>
    </div>
  )
}
