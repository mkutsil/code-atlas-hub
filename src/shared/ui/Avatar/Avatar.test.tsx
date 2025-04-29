import { render, screen, fireEvent } from '@testing-library/react';
import Avatar from 'shared/ui/Avatar/Avatar';

describe('Avatar', () => {
    test('Test render', () => {
        render(
            <Avatar 
                data-testid='avatar' 
                src="https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" 
                alt="Avatar"
            />
        );
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });
});
