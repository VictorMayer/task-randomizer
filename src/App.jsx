import { useState } from 'react'
import Menu from './Menu'
import SelectedTask from './SelectedTask'

function App() {
  const [selectedTask, setSelectedTask] = useState(JSON.parse(localStorage.getItem('selected')) > 0 ? JSON.parse(localStorage.getItem('selected'))[0] : false)

  return (
    <>
      { selectedTask 
        ? <SelectedTask selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>
        : <Menu selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>
      }
      <div className='social-media'><a href='https://github.com/VictorMayer/task-randomizer'>Link Github: Victor Mayer</a></div>
    </>
  )
}

export default App
