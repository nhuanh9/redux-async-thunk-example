import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
const baseURL = 'http://localhost:8000/'
export const loginUser = createAsyncThunk (
    'user/login',
    async (data) => {
        const response = await customAxios.post(baseURL+'login', data);
        return  response;
    }
)
