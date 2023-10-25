import CreateTasks from "./CreateTasks";


export default function RandomizeTask({tasks, modal}) {
  return (
    <>
      {modal
      ? <></>
      :<button>Randomize Task</button>
      }
    </>
  )
}