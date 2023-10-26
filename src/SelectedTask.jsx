import styled from "styled-components"

export default function SelectedTask({ selectedTask }) {
  const startedTime = new Date(selectedTask.startedAt)

  return (
    <CustomDiv>
      <dialog open className="modal">
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
      </dialog>
    </CustomDiv>
  )
}

const CustomDiv = styled.div`
  margin-top: -150px;
  
  & dialog {
    padding: 100px inherit;
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
`