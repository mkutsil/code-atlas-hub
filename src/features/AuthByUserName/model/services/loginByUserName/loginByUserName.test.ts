import { loginByUserName } from './loginByUserName';
import { userActions } from 'entities/User';
import { $api } from 'shared/api/api';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('shared/api/api');

const mockedAxios = jest.mocked($api);

describe('loginByUserName.test', () => {
    test('success login', async () => {
        const loginUserValue = { userName: 'm.kutsil.dev@gmail.com', password: '123' };
        mockedAxios.post.mockReturnValue(Promise.resolve(
            { data: loginUserValue }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk(loginUserValue);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(loginUserValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(loginUserValue);
    });

    test('error login', async () => {
        const loginUserValue = { userName: 'admin', password: '123' };

        mockedAxios.post.mockReturnValue(Promise.resolve(
            { status: 403 }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk(loginUserValue);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});