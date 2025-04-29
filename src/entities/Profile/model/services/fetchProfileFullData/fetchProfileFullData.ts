import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileFullData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileFullData',
    async (_, { extra, rejectWithValue }) => {
        try{
            const response = await extra.api.get<Profile>('/profileFull');
            
            return response.data; 
        } catch (e){
            console.error(e);
            return rejectWithValue('error');
        }
    }
);