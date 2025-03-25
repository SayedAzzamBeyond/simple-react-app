import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import ArrayState from './ArrayState.jsx'
import { Ref } from './Ref.jsx'
import DraggableApp from './DraggableApp.jsx'
import { TodoList } from './TodoList.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <TodoList />
  // </StrictMode>,
)
