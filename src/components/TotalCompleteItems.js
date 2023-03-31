import React from 'react'
import { useSelector } from 'react-redux'

const TotalCompleteItems = () => {
  const completedTodos = useSelector(state => state.todos.filter(todo => todo.completed))
  return (
    <h4 className='mt-3'>
      Total completed tasks: {completedTodos.length}
    </h4>
  )
}

export default TotalCompleteItems