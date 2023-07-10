import React, { useState } from 'react'
import like from './assets/like.svg'
import unlike from './assets/unlike.svg'

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <figure className='space-x-4'>
      <button onClick = {decrement} className={`${count < 0 ? 'bg-red-300 rounded-md' : ''} px-1 py-0.5`}>
        <img className = 'inline' src = {unlike} alt = "Unlike Button" width = "20rem"/>      
      </button>
      <p className='inline-flex justify-center w-4'>{count}</p>
      <button onClick = {increment} className={`${count > 0 ? 'bg-teal-300 rounded-md' : ''} px-1 py-0.5`}>
        <img className = 'inline' src = {like} alt = "Like Button" width = "20rem"/>      
      </button>
    </figure>
  )
}
