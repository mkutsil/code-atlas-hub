import {  ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../index';
import { StateSchema } from '../config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: Partial<StateSchema>;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}
 
const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {

    const store = createReduxStore(
        initialState as StateSchema, 
        asyncReducers as ReducersMapObject<StateSchema>);

    return (  
        <Provider store={store}>
            {children}
        </Provider>
    );
};
 
export default StoreProvider;