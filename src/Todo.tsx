import React, { useState } from 'react'
import { TodoItem, TodoProps } from './interfaces'


export const Todo: React.FC<TodoProps> = ({todo,toggleTodoStatus,editTodo}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(todo.title);
    const handleEdit = ()=>{
        setIsEditing(!isEditing);
        if(isEditing == true){
            editTodo(todo.id,editTitle);
        }
    }
    return (
        <li 
        className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}
      >
        <div className="todo-content">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => toggleTodoStatus(todo.id,e.target.checked)}
            className="todo-checkbox "
          />
          
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="edit-input"
              autoFocus
            />
          ) : (
            <span 
              className="todo-title"
            >
              {todo.title}
            </span>
          )}
        </div>
        
        <div className="todo-actions">
          <button onClick={handleEdit} className="edit-button">
            Edit
          </button>
        </div>
      </li>
    );
}
