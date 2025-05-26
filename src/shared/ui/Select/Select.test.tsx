import { render, screen, fireEvent, within } from '@testing-library/react';
import Select from './Select';

describe('Select', () => {
    test('renders with placeholder', () => {
        render(<Select options={[]} value={null} onChange={jest.fn()} placeholder="Choose" />);
        expect(screen.getByText('Choose')).toBeInTheDocument();
    });

    test('opens and closes dropdown on click', () => {
        render(
            <Select
                placeholder="Choose"
                options={[{ label: 'Test', value: '1' }]}
                value="1"
                onChange={jest.fn()}
            />
        );

        const select = screen.getByText('Test');

        fireEvent.click(select);
        expect(screen.getByTestId('select-dropdown')).toBeInTheDocument();

        fireEvent.click(select);
        expect(screen.queryByTestId('select-dropdown')).not.toBeInTheDocument();
    });

    test('calls onChange with correct value when option is clicked', () => {
        const onChange = jest.fn();
        render(
            <Select
                options={[
                    { label: 'Apple', value: 'apple' },
                    { label: 'Banana', value: 'banana' },
                ]}
                value="apple"
                onChange={onChange}
            />
        );

        fireEvent.click(screen.getByText('Apple'));
        fireEvent.click(screen.getByText('Banana'));

        expect(onChange).toHaveBeenCalledWith('banana');
    });

    test('closes dropdown when clicking outside', () => {
        render(
            <>
                <Select
                    options={[
                        { label: 'Close me', value: 'close' },
                        { label: 'Do not close me', value: 'do-not-close' },
                    ]}
                    value="do-not-close"
                    placeholder="Choose"
                    onChange={jest.fn()}
                />
                <button data-testid="outside">Outside</button>
            </>
        );

        fireEvent.click(screen.getByText('Do not close me'));
        expect(screen.getByText('Close me')).toBeInTheDocument();

        fireEvent.mouseDown(screen.getByTestId('outside'));
        expect(screen.queryByText('Close me')).not.toBeInTheDocument();
    });

    test('applies active class to selected option', () => {
        render(
            <Select
                options={[{ label: 'Active', value: 'active' }]}
                value={'active'}
                onChange={jest.fn()}
            />
        );

        fireEvent.click(screen.getByText('Active'));

        const container = screen.getByTestId('select-dropdown');
        const nestedElement = within(container).getByTestId('select-option-active');
        expect(nestedElement.className).toMatch('active');
    });
});
