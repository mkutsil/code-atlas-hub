import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/Card',
    component: Card,
    args: { 
        children: (<h1>Temporibus est architecto impedit nesciunt aut.</h1>) 
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: ThemeDecorator(Theme.LIGHT)
};

