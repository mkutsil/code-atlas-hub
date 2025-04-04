import { render, screen, fireEvent } from '@testing-library/react';
import Input from 'shared/ui/Input/Input';

describe('Input', () => {
    test('Test render', () => {
        render(<Input data-testid='login-input' placeholder='Login'/>);
        expect(screen.getByTestId('login-input')).toBeInTheDocument();
    });

    test('Input change works', () => {
        const handleChange = jest.fn();
        render(<Input data-testid="login-input" placeholder="Login" onChange={handleChange} />);
        
        const input = screen.getByTestId('login-input');
        fireEvent.change(input, { target: { value: 'admin' } });
    
        expect(handleChange).toHaveBeenCalledWith('admin');
    });

});
