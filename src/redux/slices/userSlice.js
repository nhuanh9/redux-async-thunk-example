import {createSlice} from "@reduxjs/toolkit";
import {addPlayer, getPlayers} from "../../services/playerService";
import {loginUser} from "../../services/userService";

const initialState = {
    users: [],
    currentUser: JSON.parse(localStorage.getItem('currentUser'))
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            localStorage.setItem('currentUser', JSON.stringify(payload.data))
            state.currentUser = payload.data;
        });
    }
})
export default userSlice.reducer;
