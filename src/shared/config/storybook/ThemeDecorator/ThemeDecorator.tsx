import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { ReactElement } from 'react';

export const ThemeDecorator = (theme: Theme) => {
    const Decorator = (StoryComponent: () => ReactElement) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <div className="content-page">
                    <StoryComponent />
                </div>
            </div>
        </ThemeProvider>
    );

    Decorator.displayName = 'ThemeDecorator';
    return Decorator;
};
