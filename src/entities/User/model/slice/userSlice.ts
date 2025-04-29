import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User, UserData } from '../types/user';
import {  AUTH_TOKEN_KEY } from 'shared/const/localstorage';
import { fetchUserData } from '../services/fetchUserData/fetchUserData';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
            
            if(authToken){
                state.authData = { token: JSON.parse(authToken) };
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(AUTH_TOKEN_KEY);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<UserData>) => {
                // state.isLoading = false;
                state.userData = action.payload;
            });
            
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
