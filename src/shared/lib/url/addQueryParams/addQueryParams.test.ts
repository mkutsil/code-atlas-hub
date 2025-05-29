import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            page: '2',
        });

        expect(params).toBe('?page=2');
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            page: '2',
            query: 'search',
        });

        expect(params).toBe('?page=2&query=search');
    });

    test('test with undefined', () => {
        const params = getQueryParams({
            page: '2',
            query: undefined,
        });

        expect(params).toBe('?page=2');
    });
});
