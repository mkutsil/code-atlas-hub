import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: () => ReactNode) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
