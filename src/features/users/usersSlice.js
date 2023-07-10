const { createSlice } = require("@reduxjs/toolkit");

const initialState = {users: [
    { id: '0', name: 'Alligator' },
    { id: '1', name: 'Cobra' },
    { id: '2', name: 'Gorilla' },
    { id: '3', name: 'Puma' },
    { id: '4', name: 'Rhino' },
    { id: '5', name: 'Lizard' },
]}; 

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const allUsers = state => state.users.users;

export default userSlice.reducer;