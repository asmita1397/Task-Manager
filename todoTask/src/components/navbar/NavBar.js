import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AddTodo from '../../containers/AddTodo'

import VisibleTodoList from '../../containers/VisibleTodoList' 
function NavBar() {
  return (
    <Router>
     <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/addtodo">Add-Todo </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/list">List</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/completed">Completed</Link>
            </li>

          </ul>

        </div>
      </nav>
    </div>
    
    <Route path="/addtodo"><AddTodo /></Route>
    <Route path="/list"><VisibleTodoList /></Route>
    {/* <Route path="/completed"> </Route> */}

    </Router>
  )
}

export default NavBar
