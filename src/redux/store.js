import {configureStore} from "@reduxjs/toolkit";

import playerReducer from "./slices/playerSlice"
const Store = configureStore({
    reducer: {
        players: playerReducer
    }
})

export default Store;
