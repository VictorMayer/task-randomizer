import styled from "styled-components";
import { useState } from "react";

export default function RandomizeTask({tasks, createTaskModal, randomizeTaskModal, setRandomizeTaskModal, setSelectedTask}) {
  const initialState = { "instant": false, "short": false, "medium": false, "long": false };
  const [duration, setDuration] = useState(initialState);

  const randomize = (e) => {
    e.preventDefault();
    let targetTaskList = []; 
    const targetDurations = [];
    
    for (let i in duration) {
      if (duration[i] === true) {
        targetDurations.push(i);
      }
    }
    
    targetDurations.forEach((t) => {
      if (duration[t] === true) {
        const filteredList = tasks.filter(task => task.duration === t && task.status === 'pending')
        targetTaskList = [...targetTaskList, ...filteredList];
      }
    });

    if (!targetTaskList.length) {
      setDuration(initialState);
      setRandomizeTaskModal(false); 
      return window.alert("No pending tasks with selected duration")
    }
    const index = Math.round(Math.random() * ((targetTaskList.length - 1)  - 0)) + 0;
    console.log(targetTaskList[index]);
    setRandomizeTaskModal(false);
    targetTaskList[index].status = 'active';
    targetTaskList[index].startedAt = Date.now();
    localStorage.setItem('selected', JSON.stringify([targetTaskList[index]]));
    setSelectedTask(targetTaskList[index]);
  } 

  const closeRandomizeModal = () => {
    setDuration(initialState);
    setRandomizeTaskModal(false);
  }

  return (
    <>
      {createTaskModal || randomizeTaskModal
      ?<></>
      :<button onClick={() => setRandomizeTaskModal(true)}>Randomize Task</button>
      }

      {randomizeTaskModal
      ? <>
          <dialog open={randomizeTaskModal} className="modal">
            <button className='closeButton' onClick={closeRandomizeModal}>X</button>
            <p>Choose task size: <br/> {}</p>
            <DurationButton duration={duration.instant} onClick={() => setDuration({...duration, "instant": !duration.instant})}>up to 15 min</DurationButton>
            <DurationButton duration={duration.short} onClick={() => setDuration({...duration, "short": !duration.short})}>up to 30 min</DurationButton>
            <DurationButton duration={duration.medium} onClick={() => setDuration({...duration, "medium": !duration.medium})}>up to 1 Hour</DurationButton>
            <DurationButton duration={duration.long} onClick={() => setDuration({...duration, "long": !duration.long})}>1 Hour +</DurationButton>
            <br/>
            <form onSubmit={randomize}>
              <button>Randomize</button>
            </form>
          </dialog>
        </>
      : <></>
      }
    </>
  )
}

const DurationButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  color: ${ props => props.duration ? "#1a1a1a" : "#FFFFDA" };
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${ props => props.duration ? "#FFFFDA" : "#1a1a1a" };
  cursor: pointer;
  transition: border-color 0.25s;
  border-style: none;
`