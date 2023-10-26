import styled from "styled-components"

export default function SelectedTask({ selectedTask, setSelectedTask }) {
  const startedTime = new Date(selectedTask.startedAt);

  const completeTask = () => {
    localStorage.removeItem('selected');
    const taskList = JSON.parse(localStorage.getItem('tasks'));
    for (let i in taskList) {
      if (taskList.id === selectedTask.id) {
        taskList[i].status = "completed";
        taskList[i].completedAt = Date.now();
      }
    }
    const completionTime = formattime((Date.now()) - selectedTask.startedAt);
    window.alert(`${selectedTask.title} completed in ${completionTime}!`);
    setSelectedTask(false);
  }

  const formattime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / 1000 / 60 / 60) % 24);

    const formattedTime = [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0")
    ].join(":");

    return formattedTime;
  }

  return (
    <CustomDiv>
      <dialog open className="modal">
      <div className='closeButton'>X</div>
        <p>Task: </p>
        <button>{selectedTask.title}</button>
        { selectedTask.description 
        ? <>
            <p>Description: </p>
            <button>{selectedTask.description}</button>
          </>
        : <></>
        }
        <p>Duration: </p>
        <button>{selectedTask.duration}</button>
        <p>Status: </p>
        <button>{selectedTask.status.charAt(0).toUpperCase() + selectedTask.status.slice(1)}</button>
        <p>Started at: </p>
        <button>{ startedTime.toTimeString().split(" ")[0] }</button>
        <br/>
        <button className="complete" onClick={completeTask}>Complete Task!</button>
      </dialog>
    </CustomDiv>
  )
}

const CustomDiv = styled.div`
  margin-top: -150px;
  
  .modal {
    padding: 36px 12px 0px 12px;
  }

  &>dialog>button{
    width: 200px; 
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    margin-top: 20px;
    margin-bottom: 32px;

  }
  
  p{
    margin: 5px 0px -15px 0px;
  }

  .closeButton {
    background-color: rgb(40, 40, 40);
    font-size: 12px;
    position:absolute;
    right: 10px;
    top: 10px;
    padding: 5px 12px;
    border-radius: 5px;
  }

  .complete {
    height: 60px;
    background-color: #FFFFDA;
    color: #1a1a1a;
  }

`