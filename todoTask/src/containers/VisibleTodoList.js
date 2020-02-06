import { connect } from 'react-redux'
import { onProgressTodo,toggleTodo,initialTodo} from '../actions'
import TodoList from '../components/TodoList'


const mapStateToProps = state => {
 


  
  return(
  {
  todos: state.todos
})}
const mapDispatchToProps = dispatch => ({
  onProgressTodo: id => dispatch(onProgressTodo(id)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  initialTodo: id => dispatch(initialTodo(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
  
)(TodoList)