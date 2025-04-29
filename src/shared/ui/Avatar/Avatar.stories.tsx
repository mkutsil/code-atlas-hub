import type { Meta, StoryObj } from '@storybook/react';
import Avatar, { AvatarSize } from './Avatar';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        alt: 'Avatar',
        src: 'https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png',
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ],
};

export const Small: Story = {
    args: {
        size: AvatarSize.SMALL,
    },
};

export const Medium: Story = {
    args: {
        size: AvatarSize.MEDIUM,
    },
};

export const Large: Story = {
    args: {
        size: AvatarSize.LARGE,
    },
};
