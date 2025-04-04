import { TodoItem } from "./interfaces";

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

type TodoReducerAction =  
| { type: typeof ADD_TODO; payload: TodoItem } 
| { type: typeof EDIT_TODO; payload: { id: number; newTitle: string } }
| { type: typeof TOGGLE_TODO; payload: { id: number; newStatus: boolean } };

export const TodoReducer = (todos: TodoItem[],action: TodoReducerAction)=>{
  switch(action.type){
    case ADD_TODO: return [...todos,action.payload];
    case EDIT_TODO: return todos.map(todo => todo.id === action.payload.id ? {...todo,title: action.payload.newTitle} : todo);
    case TOGGLE_TODO: return todos.map(todo => todo.id === action.payload.id ? {...todo,isCompleted: action.payload.newStatus} : todo);
    default: return todos;
  }
}
