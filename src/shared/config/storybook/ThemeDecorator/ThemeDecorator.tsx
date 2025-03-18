import { Theme } from 'app/providers/ThemeProvider';
import { ReactElement } from 'react';

export const ThemeDecorator = (theme: Theme) => {
    const Decorator = (StoryComponent: () => ReactElement) => (
        <div className={`app ${theme}`}>
            <div className='content-page'>
                <StoryComponent />
            </div>
        </div>
    );

    Decorator.displayName = 'ThemeDecorator';
    return Decorator;
};
