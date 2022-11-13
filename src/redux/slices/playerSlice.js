import {createSlice} from "@reduxjs/toolkit";
import {addPlayer, getPlayers} from "../../services/playerService";

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
        });
        builder.addCase(addPlayer.fulfilled, (state, {payload}) => {
            state.players.push(payload);
        });
    }
})
export default playerSlice.reducer;
