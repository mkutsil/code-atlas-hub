import type { Meta, StoryObj } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const Light: Story = {
    args: {},
    decorators: ThemeDecorator(Theme.LIGHT)
};

