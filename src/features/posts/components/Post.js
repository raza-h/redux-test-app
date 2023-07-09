import React from 'react'

export const Post = ({title, content}) => {

  return (
    <article className='bg-gray-900 shadow-sm hover:shadow-lg p-5 space-y-2 rounded-md hover:transform hover:translate-x-2 transition-all cursor-pointer'>
        <h3 className='font-semibold text-2xl'>{title}</h3>
        <p>{content}</p>
    </article>
  )
}
