import React,{useRef} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  
  const descriptionRef = useRef()
  const fromRef = useRef()
  const toRef = useRef()

  const handleSubmit= e => {
    e.preventDefault()
    if (!(descriptionRef.current.value.trim() && fromRef.current.value.trim() && toRef.current.value.trim())) {
      return
    }
    
    dispatch(addTodo({description:descriptionRef.current.value,
      from:fromRef.current.value,
      to:toRef.current.value,
     
    }))
    
    descriptionRef.current.value = ''
    fromRef.current.value = ''
    toRef.current.value = ''
  }
  return (
     
  
      <div>
            <form class="container col-md-6 mt-5 border "  onSubmit={(e)=>handleSubmit(e)}>
                <div class="form-group">
                    <label for="exampleInputEmail1">From</label>
                    <input type="email"  ref={fromRef} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">To</label>
                    <input type="email" ref={toRef} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text"  ref={descriptionRef} class="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
  
  )
}
export default connect()(AddTodo)