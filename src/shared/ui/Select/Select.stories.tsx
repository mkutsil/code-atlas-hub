import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';
import { useState, ReactElement } from 'react';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
    placeholder: 'Select some option',
    value: null,
    onChange: () => {},
    options: [
        {
            label: 'Cupidatat est adipisicing cupidatat in deserunt elit laborum magna esse ex occaecat. Labore dolore aliqua tempor in eu eiusmod quis incididunt consectetur qui fugiat Lorem. Sit adipisicing consequat laborum eu laboris dolor occaecat velit id anim irure voluptate. Excepteur tempor nostrud sunt ad proident nisi eiusmod in.',
            value: 'first',
        },
        { label: 'Mollitia aperiam voluptates.', value: 'second' },
        { label: 'Dignissimos laborum voluptatem.', value: 'third' },
        { label: 'Minus at neque dolor voluptatum iste neque et.', value: 'fourth' },
    ],
};

const StatefulWrapper = ({
    children,
}: {
    children: (value: string | null, onChange: (v: string | null) => void) => ReactElement;
}) => {
    const [value, setValue] = useState<string | null>(null);
    const handleChange = (newValue: string | null) => setValue(newValue);

    return children(value, handleChange);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WithStateDecorator = (Story: any) => (
    <div style={{ width: '300px', margin: '30px' }}>
        <StatefulWrapper>
            {(value, onChange) => (
                <Story
                    args={{
                        ...baseArgs,
                        value,
                        onChange,
                    }}
                />
            )}
        </StatefulWrapper>
    </div>
);

export const Dark: Story = {
    args: {
        ...baseArgs,
    },
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [WithStateDecorator],
};

export const Light: Story = {
    args: {
        ...baseArgs,
    },
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [WithStateDecorator, ThemeDecorator(Theme.LIGHT)],
};
