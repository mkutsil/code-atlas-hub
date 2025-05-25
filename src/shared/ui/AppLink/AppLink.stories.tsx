import type { Meta, StoryObj } from '@storybook/react';
import AppLink from './AppLink';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/ThemeSwitcher',
    component: AppLink,
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        children: 'Link',
    },
};

export const Light: Story = {
    args: {
        children: 'Link',
    },
    decorators: ThemeDecorator(Theme.LIGHT),
};
