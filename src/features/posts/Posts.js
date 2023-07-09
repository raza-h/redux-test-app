import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Post } from './components/Post';
import { allPosts } from './postsSlice';
import { PostForm } from './components/PostForm';

export const Posts = () => {

  const posts = useSelector(allPosts);
  const [formed, setForm] = useState(false);
  const toggleForm = () => setForm(!formed);

  return (
    <>
        <button onClick = {toggleForm} className='block w-[100%] sm:w-96 mx-auto px-2 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-all'>{formed ? 'Close' : 'Add Post'}</button>
        <PostForm formed = {formed} toggle = {toggleForm}/>
        <section className='space-y-5 py-10 lg:px-10 xl:px-20'>
            {posts.map(post => 
            {
                const {id, title, content} = post;
                return <Post key = {id} title = {title} content = {content}/>;
            })}
        </section>
    </>
  )
}
