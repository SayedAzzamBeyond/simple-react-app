import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, updateTodoTitle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
 const{attributes,listeners,setNodeRef,transform,transition}= useSortable({id: todo.id});
 
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleSave = () => {
    if (editText.trim()) {
      updateTodoTitle(todo.id, editText);
      setIsEditing(false);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  
  return (
    <li 
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
    >
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span 
            className="todo-title"
            onClick={handleEdit}
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
};

export default TodoItem;


