import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test contained theme', () => {
        render(<Button theme={ThemeButton.CONTAINED}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('contained');
    });
});
