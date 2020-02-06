let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id:id
})
export const onProgressTodo = id => ({
  type: 'ON_PROGRESS_TODO',
  id:id
})
export const initialTodo = id => ({
  type: 'INITIAL_TODO',
  id:id
})


