import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserData } from '../../types/user';

export const fetchUserData = createAsyncThunk<UserData, void, ThunkConfig<string>>(
    'user/fetchUserData',
    async (_, { extra, rejectWithValue }) => {
        try{
            const response = await extra.api.get<UserData>('/profile');
            
            return response.data; 
        } catch (e){
            console.error(e);
            return rejectWithValue('error');
        }
    }
);