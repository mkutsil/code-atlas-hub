import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export interface PutProfileDataProps {
    profileData: Profile;
    profileId: string;
}

export const putProfileData = createAsyncThunk<Profile, PutProfileDataProps, ThunkConfig<string>>(
    'profile/putProfileData',
    async ({ profileData, profileId }, { extra, rejectWithValue }) => {
        try{
            const response = await extra.api.put<Profile>(`/profileFull/${profileId}`, profileData);
            
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