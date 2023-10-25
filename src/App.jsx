import { useEffect, useState } from 'react'
import './css/App.css'
import CreateTasks from './CreateTasks'
import RandomizeTask from './RandomizeTask'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')))
  const [createTaskModal, setCreateTaskModal] = useState(false)
  const [randomizeTaskModal, setRandomizeTaskModal] = useState(false)
  
  return (
    <>
      { createTaskModal || tasks?.length > 0 ? <></> : <h3>No tasks found</h3> }
      
      { tasks?.length > 0
      ? <RandomizeTask 
          tasks={tasks}
          createTaskModal={createTaskModal}
          setCreateTaskModal={setCreateTaskModal}
          randomizeTaskModal={randomizeTaskModal}
          setRandomizeTaskModal={setRandomizeTaskModal}
        />
      : <></>}

      { randomizeTaskModal 
      ? <></>
      :<CreateTasks 
        tasks={tasks}
        setTasks={setTasks}
        createTaskModal={createTaskModal}
        setCreateTaskModal={setCreateTaskModal}
      />
      }
    </>
  )
}

export default App
