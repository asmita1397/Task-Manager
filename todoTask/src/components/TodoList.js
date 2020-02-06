import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


const TodoList = ({ todos, onProgressTodo, toggleTodo, initialTodo }) => {
  
 

  const allowDrop = (ev) => { 
    ev.preventDefault();
    return false;

  }


  const drop = (ev) => {
    debugger
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
  
    console.log(data)
    switch (ev.target.id) {
      case "todo": initialTodo(data)
        break
      case "progress": onProgressTodo(data)
        break
      case "complete": toggleTodo(data)
      ev.preventDefault();
        break;
      default:initialTodo(data)
        break

    }
 
    // ev.target.appendChild(document.getElementById(data));

  }

  
  
  return (
    <>
    

      <div class="card mt-5 float-left  ml-5" style={{ width: "25em" }} >
        <div class="card-header " >
          TODO
      </div>


        <div class="card-body p-5" onDrop={(event) => { drop(event) }} onDragOver={(event) => { allowDrop(event) }} id="todo">

          {todos.map(todo => {
            return (

               todo.initial ? <Todo key={todo.id} {...todo} /> : null
            )
          }
          )}
        </div>
      </div>

      




      <div class="card mt-5 float-left  ml-5" style={{ width: "25em" }} >
        <div class="card-header " >
          ON PROGRESS
      </div>
        <div class="card-body p-5" onDrop={(event) => { drop(event) }} onDragOver={(event) => { allowDrop(event) }} id="progress">

          {todos.map(todo => (
            todo.onprogress ? <Todo key={todo.id} {...todo} /> : null
          ))}
        </div>
      </div>


      <div class="card mt-5 float-left ml-5" style={{ width: "25em" }} >
        <div class="card-header " >
          COMPLETED
      </div>



        <div class="card-body p-5" onDrop={(event) => { drop(event) }} onDragOver={(event) => { allowDrop(event) }} id="complete">
          
          {todos.map(todo => {
            console.log('jkkkkkkkkkkkkkkkkkkh',todos)
           return todo.completed ? <Todo key={todo.id} {...todo} /> : null
          }
          )}
        </div>
      </div>

    </>
  )

}
export default TodoList