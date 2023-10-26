import React from 'react' 
import { useState } from 'react'

export default function CreateTasks({ tasks, setTasks, createTaskModal, setCreateTaskModal }) {
  const [taskTitleToCreate, setTaskTitleToCreate] = useState("")
  const [isThereDescription, setIsThereDescription] = useState(false);
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const createNewTask = (e) => {
    e.preventDefault();
    setCreateTaskModal(true);
  }

  const saveTaskToStorage = (e) => {
    e.preventDefault();
    
    if (!duration || !taskTitleToCreate) return window.alert(!taskTitleToCreate ? "Must set a title" : "Must choose a duration");
    
    const newTask = {
      id: tasks?.length || 0,
      title: taskTitleToCreate,
      description: description,
      duration: duration,
      createdAt: Date.now(),
      startedAt: null,
      completedAt: null,
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
        <input type='text' placeholder={createTaskModal ? 'Title' : 'Create new task'} value={taskTitleToCreate} onFocus={() => setCreateTaskModal(true)} onChange={(e) => setTaskTitleToCreate(e.target.value)} />
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
        <button onClick={() => setDuration('instant')}>up to 15 min</button>
        <button onClick={() => setDuration('short')}>up to 30 min</button>
        <button onClick={() => setDuration('medium')}>up to 1 Hour</button>
        <button onClick={() => setDuration('long')}>1 Hour +</button>
        <form>
          <button onClick={saveTaskToStorage}>Save task</button>
        </form>    
      </dialog>
    </>
  )
}