export interface TodoItem{
  id: number,
  title: string 
  isCompleted: boolean
}

export interface TodoProps {
    todo: TodoItem;
    toggleTodoStatus: (id: number, newStatus: boolean) => void;
    editTodo: (id: number, newTitle: string) => void;
}
  