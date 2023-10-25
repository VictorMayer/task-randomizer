import { useEffect, useState } from 'react'
import './css/App.css'
import CreateTasks from './CreateTasks'
import RandomizeTask from './RandomizeTask'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')))
  const [modal, setModal] = useState(false)

  
  return (
    <>
      { modal || tasks?.length > 0 ? <></> : <h3>No tasks found</h3> }
      
      {tasks?.length > 0
      ? <RandomizeTask tasks={tasks} modal={modal} setModal={setModal}/>
      : <></> 
      }
      
      <CreateTasks tasks={tasks} setTasks={setTasks} modal={modal} setModal={setModal}/>
    </>
  )
}

export default App
