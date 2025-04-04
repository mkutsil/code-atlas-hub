import { ReactElement } from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state:Partial<StateSchema>) => {
    const Decorator = (StoryComponent: () => ReactElement) => (
        <StoreProvider initialState={state}>
            <StoryComponent/>
        </StoreProvider>
    );

    Decorator.displayName = 'StoreDecorator';
    return Decorator;
};
