import { useState } from 'react'
import './css/App.css'
import CreateTasks from './CreateTasks'
import RandomizeTask from './RandomizeTask'
import SelectedTask from './SelectedTask'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')))
  const [createTaskModal, setCreateTaskModal] = useState(false)
  const [randomizeTaskModal, setRandomizeTaskModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState(JSON.parse(localStorage.getItem('selected')) || false)

  return (
    <>
      <p className='beta'>Beta Access</p>
      { createTaskModal || tasks?.length > 0 ? <></> : <h3>No tasks found</h3> }
      
      { tasks?.length > 0 && !selectedTask
      ? <RandomizeTask 
          tasks={tasks}
          createTaskModal={createTaskModal}
          setCreateTaskModal={setCreateTaskModal}
          randomizeTaskModal={randomizeTaskModal}
          setRandomizeTaskModal={setRandomizeTaskModal}
          setSelectedTask={setSelectedTask}
        />
      : <></>}

      { randomizeTaskModal || selectedTask
        ? <></>
        :<CreateTasks 
          tasks={tasks}
          setTasks={setTasks}
          createTaskModal={createTaskModal}
          setCreateTaskModal={setCreateTaskModal}
        />
      }

      { selectedTask 
        ? <SelectedTask selectedTask={selectedTask}/>
        : <></>
      }

    </>
  )
}

export default App
