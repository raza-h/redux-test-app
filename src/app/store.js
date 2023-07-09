import {configureStore} from '@reduxjs/toolkit'
import counter from '../features/counter/counterSlice'
import posts from '../features/posts/postsSlice'

export const store = configureStore
({
    reducer: {counter, posts}
});
