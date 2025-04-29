import { loginByUserName } from './loginByUserName';
import { userActions } from 'entities/User';
import { $api } from 'shared/api/api';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('shared/api/api');

const mockedApi = jest.mocked($api); 

describe('loginByUserName', () => {
    test('success login', async () => {
        const loginUserValue = { userName: 'm.kutsil.dev@gmail.com', password: '123' };
        const loginResponse = { token: '123' };

        mockedApi.post.mockResolvedValue({ data: loginResponse });

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk(loginUserValue);

        expect(mockedApi.post).toHaveBeenCalledWith('/login', loginUserValue);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(loginResponse));
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(loginResponse);
    });

    test('error login', async () => {
        const loginUserValue = { userName: 'admin', password: '123' };

        mockedApi.post.mockRejectedValue(new Error('Login error'));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk(loginUserValue);

        expect(mockedApi.post).toHaveBeenCalledWith('/login', loginUserValue);
        expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.setAuthData(expect.anything()));
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
