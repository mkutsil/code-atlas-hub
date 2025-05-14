import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileFullData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileFullData',
    async (profileId, { extra, rejectWithValue }) => {
        try{
            const response = await extra.api.get<Profile>(`/profileFull/${profileId}`);
            
            return response.data; 
        } catch (e){
            console.error(e);
            return rejectWithValue('error');
        }
    }
);