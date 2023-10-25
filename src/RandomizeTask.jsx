

export default function RandomizeTask({tasks, createTaskModal, randomizeTaskModal, setRandomizeTaskModal}) {
  const randomize = (e) => {
    e.preventDefault();

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
            <button className='closeButton' onClick={() => setRandomizeTaskModal(false)}>X</button>
            <p>Choose task size: <br/> {}</p>
            <button>up to 15 min</button>
            <button>up to 30 min</button>
            <button>up to 1 Hour</button>
            <button>1 Hour +</button>
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