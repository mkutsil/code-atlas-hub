import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children:
            'Velit eiusmod aliqua sint dolore sit proident adipisicing excepteur sint id aliquip incididunt. Qui dolore aliqua Lorem sit deserunt velit. Nisi occaecat exercitation occaecat nisi aliquip nisi est nisi. Laborum amet occaecat eiusmod ea excepteur incididunt ullamco anim anim consequat excepteur. Dolor aliquip non laborum voluptate ex. Voluptate ullamco eu ea laborum.',
        isOpen: true,
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const Light: Story = {
    args: {},
    decorators: ThemeDecorator(Theme.LIGHT),
};
