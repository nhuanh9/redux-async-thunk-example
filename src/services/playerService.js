import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = 'http://localhost:3001/players'
export const getPlayers = createAsyncThunk (
    'players/getPlayers',
    async () => {
        const response = await axios.get(baseURL);
        return  response;
    }
)
export const addPlayer = createAsyncThunk (
    'players/addPlayer',
    async (data) => {
        const response = await axios.post(baseURL, data);
        return  data;
    }
)
