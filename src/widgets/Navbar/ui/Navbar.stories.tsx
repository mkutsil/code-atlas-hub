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
                    token: '123',
                    id: '1',
                    userName: 'mkutsil.dev@gmail.com',
                    role: 'ADMIN',
                    avatar: 'https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png'
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

