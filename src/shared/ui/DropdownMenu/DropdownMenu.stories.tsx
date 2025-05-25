import type { Meta, StoryObj } from '@storybook/react';
import DropdownMenu from './DropdownMenu';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const dropdownMenuConfig = [
    { label: 'Profile', action: () => {} },
    { label: 'Logout', action: () => {} },
];

const meta = {
    title: 'shared/DropdownMenu',
    component: DropdownMenu,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        children: <button>Click me</button>,
        dropdownMenuConfig: dropdownMenuConfig,
    },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
