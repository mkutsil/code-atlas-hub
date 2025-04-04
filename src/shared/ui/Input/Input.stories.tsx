import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        placeholder: 'Login',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px', margin: '30px' }}>
                <Story />
            </div>
        ),
        ThemeDecorator(Theme.LIGHT)
    ],
};

export const Dark: Story = {
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        placeholder: 'Login',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px', margin: '30px' }}>
                <Story />
            </div>
        ),
        ThemeDecorator(Theme.DARK)
    ],
};
