import { createSlice } from '@reduxjs/toolkit'

const initialState = {posts: [
    {id: '' + Math.random(), title: 'Learning Redux', content: 'Do not like it'},
    {id: '' + Math.random(), title: 'Slicing', content: 'Makes it easier'}
]}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        add: ({posts}, {payload}) => {posts.push(payload)}
    }
})

export const {add} = postsSlice.actions; 
export const allPosts = state => state.posts.posts;
export default postsSlice.reducer;