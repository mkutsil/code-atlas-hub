import type { Meta, StoryObj } from '@storybook/react';
import Text, { TextAlign, TextSize } from './Text';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/Text',
    component: Text,
    args: {
        title: 'Title text',
        text: 'Anim est aute velit in magna magna laboris id enim tempor mollit laborum amet. Ut adipisicing adipisicing anim sint ipsum laboris eu labore duis quis mollit adipisicing. Minim eiusmod laborum sint anim ut nisi est. Esse sint voluptate minim ad nostrud pariatur. Do cupidatat laborum aliquip non cillum quis pariatur. Deserunt dolor laboris proident duis officia adipisicing. Nostrud excepteur proident proident mollit nulla velit tempor duis officia occaecat dolore adipisicing aliqua quis.',
    }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: ThemeDecorator(Theme.LIGHT)
};

export const TextWithTitle: Story = {
    args: {
        size: TextSize.S,
        align: TextAlign.CENTER,
    },
};

export const TextSizeXS: Story = {
    args: {
        size: TextSize.XS,
    },
};

export const TextSizeS: Story = {
    args: {
        size: TextSize.S,
    },
};

export const TextSizeM: Story = {
    args: {
        size: TextSize.M,
    },
};

export const TextSizeL: Story = {
    args: {
        size: TextSize.L,
    },
};

export const TextAlignCenter: Story = {
    args: {
        align: TextAlign.CENTER,
    },
};

export const TextAlignLeft: Story = {
    args: {
        align: TextAlign.LEFT,
    },
};

export const TextAlignRight: Story = {
    args: {
        align: TextAlign.RIGHT,
    },
};

export const TitleAlignCenter: Story = {
    args: {
        titleAlign: TextAlign.CENTER,
    },
};

export const TitleAlignLeft: Story = {
    args: {
        titleAlign: TextAlign.LEFT,
    },
};

export const TitleAlignRight: Story = {
    args: {
        titleAlign: TextAlign.RIGHT,
    },
};

