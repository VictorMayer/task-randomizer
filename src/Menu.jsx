import React from 'react'
import { useState } from 'react'
import './css/App.css'
import CreateTasks from './CreateTasks'
import RandomizeTask from './RandomizeTask'

function Menu({ selectedTask, setSelectedTask }) {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks'))?.filter(t => t.status !== 'pending'))
  const [createTaskModal, setCreateTaskModal] = useState(false)
  const [randomizeTaskModal, setRandomizeTaskModal] = useState(false)

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
    </>
  )
}

export default Menu
