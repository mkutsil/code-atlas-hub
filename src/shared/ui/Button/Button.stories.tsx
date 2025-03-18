import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ThemeButton } from './Button';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: ThemeButton.CLEAR
    },
};

export const Contained: Story = {
    args: {
        children: 'Contained',
        theme: ThemeButton.CONTAINED
    },
};

export const ContainedLight: Story = {
    args: {
        children: 'ContainedLight',
        theme: ThemeButton.CONTAINED
    },
    decorators: ThemeDecorator(Theme.LIGHT)
};

export const Outlined: Story = {
    args: {
        children: 'Outlined',
        theme: ThemeButton.OUTLINED
    },
};
