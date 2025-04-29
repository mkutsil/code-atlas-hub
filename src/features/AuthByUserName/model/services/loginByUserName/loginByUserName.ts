import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { AUTH_TOKEN_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUserNameProps {
  userName: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const loginByUserName = createAsyncThunk<LoginResponse, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.post<LoginResponse>('/login', authData);
      
            if (!response.data) {
                throw new Error();
            }
      
            localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(response.data.token));
      
            dispatch(userActions.setAuthData(response.data));

            // extra.navigate?.('/profile');
      
            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue('error');
        }
    }
);
