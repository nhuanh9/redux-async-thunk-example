import {configureStore} from "@reduxjs/toolkit";

import playerReducer from "./slices/playerSlice"
import userReducer from "./slices/userSlice"

const Store = configureStore({
    reducer: {
        players: playerReducer,
        users: userReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default Store;
