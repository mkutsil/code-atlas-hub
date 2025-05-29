import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';
import { action } from '@storybook/addon-actions';
const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    args: {
        tabs: [
            { value: 'first tab', content: 'first tab' },
            { value: 'second tab', content: 'second tab' },
            { value: 'third tab', content: 'third tab' },
            { value: 'fourth tab', content: 'fourth tab' },
        ],
        onTabClick: action('onTabClick'),
        value: 'second tab',
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: ThemeDecorator(Theme.LIGHT),
};
