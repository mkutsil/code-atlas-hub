import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const putProfileData = createAsyncThunk<Profile, Profile, ThunkConfig<string>>(
    'profile/putProfileData',
    async (profileData, { extra, rejectWithValue }) => {
        try{
            const response = await extra.api.put<Profile>('/profileFull', profileData);
            
            if (!response.data) {
                throw new Error();
            }

            return response.data; 
        } catch (e){
            console.error(e);
            return rejectWithValue('error');
        }
    }
);