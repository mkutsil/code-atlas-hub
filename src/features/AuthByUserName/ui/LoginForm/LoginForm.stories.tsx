import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    args: {
        onModalClose: () => {},
    },
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: false,
                error: undefined,
            }
        }),
    ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const Light: Story = {
    args: {},
    decorators: ThemeDecorator(Theme.LIGHT)
};

export const withError: Story = {
    args: {},
    decorators: StoreDecorator({
        loginForm: {
            error: 'error',
            isLoading: false,
        },    
    })
};

export const Loading: Story = {
    args: {},
    decorators: StoreDecorator({
        loginForm: {
            isLoading: true,
        },    
    })
};

