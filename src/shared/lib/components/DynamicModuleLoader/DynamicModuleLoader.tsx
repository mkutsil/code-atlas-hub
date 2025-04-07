import { useEffect, ReactNode } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from 'app/providers/StoreProvider/hooks/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}
 
const DynamicModuleLoader = (props:DynamicModuleLoaderProps)  => {
    const { children, reducers, removeAfterUnmount = true } = props;
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([ name, reducer ]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([ name ]: ReducerListEntry) => {
                    store.reducerManager.remove('loginForm');
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
        }, [  ]);  
    
    return children;
};
 
export default DynamicModuleLoader;