import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './Skeleton';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    args: {
        width: '300px',
        height: '300px',
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: ThemeDecorator(Theme.LIGHT),
};

export const Circle: Story = {
    args: {
        border: '50%',
    },
    decorators: ThemeDecorator(Theme.LIGHT),
};
