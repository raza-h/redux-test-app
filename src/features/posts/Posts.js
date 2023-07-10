import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Post } from './components/Post';
import { PostForm } from './components/PostForm';
import { allPosts, error, status, fetchPosts } from './postsSlice';
import { allUsers } from '../users/usersSlice';
import Loader from '../components/Loader';

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(allPosts);
  const users = useSelector(allUsers);
  const postsStatus = useSelector(status);
  const postsError = useSelector(error);
  const [formed, setForm] = useState(false);
  const toggleForm = () => setForm(!formed);

  useEffect(() =>
  {
    if(postsStatus === 'idle')
      dispatch(fetchPosts());

  }, [postsStatus, dispatch]);

  const PostExcerpts = () => posts.map(post => 
  {
    const {id, title, content, userId, body} = post;
    const tagged = users.find(user => user.id === '' + userId);
    const authorName = tagged ? tagged.name : 'Anonymous';
    return <Post key = {id} id = {id} title = {title} content = {content || body} author = {authorName}/>;
  })

  return (
    <>
        <button onClick = {toggleForm} className='block w-[100%] sm:w-96 mx-auto px-2 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-all'>{formed ? 'Close' : 'Add Post'}</button>
        <PostForm formed = {formed} toggle = {toggleForm}/>
        <section className='space-y-5 py-10 lg:px-10 xl:px-20'>
          {
            postsStatus === 'succeeded' ? <PostExcerpts /> :
            postsStatus === 'idle' || 'loading' ? <Loader /> :
            <p className='text-red-400 text-2xl'>Couldn't retrieve posts {postsError}</p>  
          }
        </section>
    </>
  )
}
