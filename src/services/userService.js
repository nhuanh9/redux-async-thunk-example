import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = 'http://localhost:8000/'
export const loginUser = createAsyncThunk (
    'user/login',
    async (data) => {
        const response = await axios.post(baseURL+'login', data);
        return  response;
    }
)
