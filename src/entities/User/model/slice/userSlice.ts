import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types/user';
import {  AUTH_DATA_KEY } from 'shared/const/localstorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const authData = localStorage.getItem(AUTH_DATA_KEY);
            
            if (authData){
                state.authData =  JSON.parse(authData);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(AUTH_DATA_KEY);
        }
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
