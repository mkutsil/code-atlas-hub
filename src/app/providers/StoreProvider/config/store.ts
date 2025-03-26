import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {
        counter: counterReducer,
    },
    devTools: IS_DEV,
    preloadedState: initialState,
}); 
