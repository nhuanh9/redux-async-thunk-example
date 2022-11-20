import {createSlice} from "@reduxjs/toolkit";
import {addPlayer, getPlayers} from "../../services/playerService";
import {loginUser} from "../../services/userService";

const initialState = {
    users: [

    ],
    currentUser: {

    }
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload.data;
        });
    }
})
export default userSlice.reducer;
