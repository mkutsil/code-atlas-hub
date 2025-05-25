import type { Meta, StoryObj } from '@storybook/react';
import GridTable from './GridTable';
import { ThemeDecorator } from '../../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'pages/HomePage/components/GridTable',
    component: GridTable,
} satisfies Meta<typeof GridTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const Light: Story = {
    args: {},
    decorators: ThemeDecorator(Theme.LIGHT),
};
