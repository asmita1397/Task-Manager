const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed:false,
            onprogress:false,
            initial:true
          }
        ]

      case 'INITIAL_TODO':
        return state.map(todo =>
          todo.id == action.id ? { ...todo, initial:true,completed:false,onprogress:false} : todo
        ) 
        case 'ON_PROGRESS_TODO':
          return state.map(todo =>
            todo.id == action.id ? {...todo, onprogress:true,completed:false,initial:false} : todo
          )
        case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id == action.id ? { ...todo, completed:true,onprogress:false,initial:false} : todo
        )
       
      default:
        return state
    }
  }
  export default todos