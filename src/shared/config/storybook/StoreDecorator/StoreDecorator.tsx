import { ReactElement } from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
};

export const StoreDecorator = (
    state:Partial<StateSchema>,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
) => {
    const Decorator = (StoryComponent: () => ReactElement) => (
        <StoreProvider 
            initialState={state} 
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent/>
        </StoreProvider>
    );

    Decorator.displayName = 'StoreDecorator';
    return Decorator;
};
