import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return isLoading', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return false', () => {
        const state: Partial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
