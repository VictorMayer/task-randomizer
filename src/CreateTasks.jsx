import { useState } from 'react'

export default function CreateTasks({ tasks, setTasks, createTaskModal, setCreateTaskModal }) {
  const [taskTitleToCreate, setTaskTitleToCreate] = useState("")
  const [isThereDescription, setIsThereDescription] = useState(false);
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const createNewTask = (e) => {
    e.preventDefault();
    console.log(taskTitleToCreate);
    setCreateTaskModal(true);
  }

  const saveTaskToStorage = (e) => {
    e.preventDefault();
    
    const newTask = {
      title: taskTitleToCreate,
      description: description,
      duration: duration,
      createdAt: Date.now(),
      status: "pending",
    }

    localStorage.setItem('tasks', tasks?.length > 0 ? JSON.stringify([...tasks, {...newTask}]) : JSON.stringify([{...newTask}]));
    setTasks(JSON.parse(localStorage.getItem('tasks')))
    setModalInitialStates();
  }

  const setModalInitialStates = () => {
    setTaskTitleToCreate("");
    setCreateTaskModal(false);
    setIsThereDescription(false);
    setDescription("");
    setDuration("");
  }

  return (
    <>
      <form onSubmit={createNewTask}>
        <input type='text' placeholder='Create new task' value={taskTitleToCreate} onFocus={() => setCreateTaskModal(true)} onChange={(e) => setTaskTitleToCreate(e.target.value)} />
      </form>
        { isThereDescription ? <input type="text" placeholder="Description" autoFocus={true} value={description} onChange={(e) => setDescription(e.target.value)}/> : <></> }
      <dialog open={createTaskModal} className='modal'>
        <button className='closeButton' onClick={setModalInitialStates}>X</button>
        <p>Task Title: <br/> {taskTitleToCreate}</p>
        <br/>
        
        { isThereDescription 
          ?<><p>Task description: <br/> {description}</p>
          </> 
          : <button onClick={() => setIsThereDescription(true)}>Add Description</button>
        }

        <br/>
        <p>Task estimated duration:</p>
        <button onClick={() => setDuration('00:15')}>up to 15 min</button>
        <button onClick={() => setDuration('00:30')}>up to 30 min</button>
        <button onClick={() => setDuration('01:00')}>up to 1 Hour</button>
        <button onClick={() => setDuration('99:99')}>1 Hour +</button>
        <form>
          <button onClick={saveTaskToStorage}>Save task</button>
        </form>    
      </dialog>
    </>
  )
}