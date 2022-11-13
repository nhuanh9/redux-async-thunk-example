import {createSlice} from "@reduxjs/toolkit";
import {getPlayers} from "../../services/playerService";

const initialState = {
    players: []
}
const playerSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPlayers.fulfilled, (state, {payload}) => {
            state.players = payload.data;
        })
    }
})
export default playerSlice.reducer;
