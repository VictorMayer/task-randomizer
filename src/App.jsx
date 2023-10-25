import { useState } from 'react'
import './css/App.css'
import CreateTasks from './CreateTasks'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || false)

  return (
    <>
      {tasks.length < 0
      ? <RandomizeTask tasks={tasks}/>
      : <CreateTasks tasks={tasks} setTasks={setTasks}/>
      }
    </>
  )
}

export default App
