import React from 'react'


const Todo = ({completed,onprogress,initial,text,id }) =>{ 
  const drag=(ev)=> {

    ev.dataTransfer.setData("text", ev.target.id);
   
  }
 
  return (
    
  <>
   
    <div class="card mt-2" style={{ width: "18em" }} draggable="true" onDragStart={(event)=>{drag(event)}} id={id}>
      <div class="card-header">
        Task {++id}
     </div>
      <ul class="list-group list-group-flush">
        <li 
          style={{
            color: completed ? 'green' : 
            onprogress?'blue':'red'
          }}    class="list-group-item">From :{text.from} <br />To:{text.to}<br />Task:{text.description}</li>

      </ul>
    </div>
  </>
)

}
export default Todo