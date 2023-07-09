import React from 'react'
import { increment } from './counterSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const Counter = () => {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div onClick={()=>{dispatch(increment())}}>{count}</div>
  )
}
