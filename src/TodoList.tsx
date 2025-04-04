
import { useReducer, useRef, useState } from 'react';
import './App.css';
import { Todo } from './Todo';
import { TodoItem } from './interfaces';
import { ADD_TODO, EDIT_TODO, TodoReducer, TOGGLE_TODO } from './TodoUtilities';


export const TodoList = () => {
    const [todos, dispatch] = useReducer(TodoReducer,[]);
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const nextId = useRef(0);
    const addTodo = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        nextId.current += 1;
        const todo = {
            id: nextId.current,
            title: newTodoTitle,
            isCompleted: false
        }
        setNewTodoTitle("");
        dispatch({type: ADD_TODO,payload: todo});
    }

    function editTodo(id: number,newTitle: string){
        console.log(id,newTitle);
        dispatch({type: EDIT_TODO,payload: {id,newTitle}});
    }
    function toggleTodoStatus(id: number,newStatus: boolean){
        dispatch({type: TOGGLE_TODO,payload: {id,newStatus}});
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
