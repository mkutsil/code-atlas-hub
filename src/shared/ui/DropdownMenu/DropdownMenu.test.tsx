import { render, screen, fireEvent } from '@testing-library/react';
import DropdownMenu from 'shared/ui/DropdownMenu/DropdownMenu';

const dropdownMenuConfig = [
    { label: 'Profile', action: () => {} },
    { label: 'Logout', action: () => {} }, 
];

describe('DropdownMenu', () => {
    test('Test render', () => {
        render(
            <DropdownMenu 
                data-testid='dropdownMenu' 
                dropdownMenuConfig={dropdownMenuConfig}
            >
                <button>Click me</button>
            </DropdownMenu>
        );
        expect(screen.getByTestId('dropdownMenu')).toBeInTheDocument();
    });
});
