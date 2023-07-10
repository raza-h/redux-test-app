import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {

    posts: 
    [
        // {id: '' + Math.random(), title: 'Learning Redux', content: 'Do not like it', author: '0'},
        // {id: '' + Math.random(), title: 'Slicing', content: 'Makes it easier', author: '0'}
    ],
    
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () =>
{
    try
    {
        const response = await axios.get(POSTS_URL);
        return response.data;
    }

    catch(err)
    {
        return err.message;
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        add: {
            reducer({ posts }, { payload }) { posts.unshift(payload) },
            prepare(post) { return { payload: { ...post, id: nanoid() } } }
        }
    },

    extraReducers(builder)
    {
        const { addCase } = builder;
        
        addCase(fetchPosts.pending, state => {state.status = 'loading'});
        
        addCase(fetchPosts.fulfilled, (state, {payload}) => {
            state.status = 'succeeded';
            for (let i of payload)
            {
                state.posts.push(i);
            }
        })
        
        addCase(fetchPosts.rejected, (state, {error}) =>
        {
            state.status = 'failed';
            state.error = error.message;
        })
    }
})

export const {add} = postsSlice.actions; 
export const allPosts = state => state.posts.posts;
export const error = state => state.posts.error;
export const status = state => state.posts.status;
export default postsSlice.reducer;