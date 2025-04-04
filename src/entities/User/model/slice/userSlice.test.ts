// import { counterActions, counterReducer } from './userSlice';
// import { CounterSchema } from '../types/user';

// describe('counterSlice.test', () => {
//     test('decrement counter action', () => {
//         const state:CounterSchema = {
//             value: 10
//         };

//         expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
//     });

//     test('increment counter action', () => {
//         const state:CounterSchema = {
//             value: 10
//         };

//         expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
//     });

//     test('increment counter action without state', () => {
//         expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
//     });

//     test('decrement counter action without state', () => {
//         expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
//     });
// });