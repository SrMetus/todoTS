import { useState } from "react"
import { Todos } from "./componets/Todos"

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
  const [todos] = useState(mockTodos)
  return (
    <>
    <div className="todoapp">
      <Todos todos = { todos } />
    </div>
    </>
  )
}

export default App
