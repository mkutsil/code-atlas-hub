import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    decorators: [
        StoreDecorator({
            user: {
                authData:{
                    id: 1,
                    userName: 'mkutsil.dev@gmail.com',
                }
            }
        }),
    ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;
 
export const Dark: Story = {
    args: {}, 
};

export const Light: Story = {
    args: {},
    decorators: ThemeDecorator(Theme.LIGHT)
};

