import { useState } from "react"
import { Todos } from "./componets/Todos"
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from "./types"
import { ALL_FILTERS } from "./consts"
import { Footer } from "./componets/Footer"
import { Header } from "./componets/Header"

const mockTodos = [
  { 
    id: '1',
    title: 'Reforzar JavaScript',
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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(ALL_FILTERS)

  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  const handleCompleted = (
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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  } 

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === ALL_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === ALL_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [ ...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <>
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove} 
        todos = { filteredTodos }
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected= { filterSelected }
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
    </>
  )
}

export default App
