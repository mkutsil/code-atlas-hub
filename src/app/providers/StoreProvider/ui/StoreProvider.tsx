import {  ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../index';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: Partial<StateSchema>;
}
 
const StoreProvider = ({ children, initialState }: StoreProviderProps) => {

    const store = createReduxStore(initialState as StateSchema);

    return (  
        <Provider store={store}>
            {children}
        </Provider>
    );
};
 
export default StoreProvider;