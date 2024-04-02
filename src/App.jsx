import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1>Todo Application using Redux-Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
