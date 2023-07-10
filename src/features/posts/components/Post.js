import React from 'react'
import { Counter } from '../../counter/Counter'

export const Post = ({id, title, content, author}) => {

  return (
    <article className='bg-gray-900 shadow-sm hover:shadow-lg p-5 space-y-2 rounded-md hover:transform hover:translate-x-2 transition-all'>
        <span className='text-lg float-right bg-zinc-600 px-2 py-0.5 rounded-md ml-5 mb-5'>{author}</span>
        <h3 className='font-semibold text-2xl'>{title}</h3>
        <p>{content}</p>
        <Counter key = {id}/>
    </article>
  )
}
