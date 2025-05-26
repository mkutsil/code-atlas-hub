import { render, fireEvent } from '@testing-library/react';
import { useRef, useState } from 'react';
import { useClickOutside } from './useClickOutside';

const TestComponent = ({ onOutsideClick }: { onOutsideClick: () => void }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(true);

    useClickOutside(ref, () => {
        onOutsideClick();
        setIsOpen(false);
    });

    return (
        <div>
            <div data-testid="outside">Outside</div>
            {isOpen && (
                <div ref={ref} data-testid="inside">
                    Inside
                </div>
            )}
        </div>
    );
};

describe('Select', () => {
    test('does not call handler when clicking inside', () => {
        const handler = jest.fn();
        const { getByTestId } = render(<TestComponent onOutsideClick={handler} />);

        fireEvent.mouseDown(getByTestId('inside'));
        expect(handler).not.toHaveBeenCalled();
    });

    test('calls handler when clicking outside', () => {
        const handler = jest.fn();
        const { getByTestId } = render(<TestComponent onOutsideClick={handler} />);

        fireEvent.mouseDown(getByTestId('outside'));
        expect(handler).toHaveBeenCalledTimes(1);
    });

    test('calls handler on touchstart outside', () => {
        const handler = jest.fn();
        const { getByTestId } = render(<TestComponent onOutsideClick={handler} />);

        fireEvent.touchStart(getByTestId('outside'));
        expect(handler).toHaveBeenCalled();
    });

    test('removes event listeners on unmount', () => {
        const handler = jest.fn();
        const { unmount } = render(<TestComponent onOutsideClick={handler} />);

        unmount();
        fireEvent.mouseDown(document);
        expect(handler).not.toHaveBeenCalled();
    });
});
