import React from 'react'
import TodosList from './TodosList';

function Todos() {
  return (
    <div>
        <h1>This is where the Todos will be listed...</h1>
        {/* @ts-ignore */}
        <TodosList/>
        </div>
  )
}

export default Todos;