import { useState } from "react"
import { Todos } from "./componets/Todos"
import { type TodoId, type Todo as TodoType } from "./types"

const mockTodos = [
  { 
    id: '1',
    title: 'Reforsar javaScript',
    completed: false
  },
  {
    id: '2',
    title: 'Crear porfolio',
    completed: false
  },
  {
    id: '3',
    title: 'Crear todo',
    completed: true
  }
]

const App = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  const HandleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
    ):void => {
      const newTodos = todos.map(todo =>{
        if(todo.id === id){
          return {
            ...todo, completed
          }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <>
    <div className="todoapp">
      <Todos
        onToggleCompleteTodo={HandleCompleted}
        onRemoveTodo={handleRemove} 
        todos = { todos } />
    </div>
    </>
  )
}

export default App
