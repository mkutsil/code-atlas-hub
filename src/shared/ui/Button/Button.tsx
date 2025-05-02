import { ButtonHTMLAttributes, FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';
import Loader from '../Loader/Loader';

export enum ThemeButton {
	CLEAR = 'clear', 
	OUTLINED = 'outlined',
	CONTAINED = 'contained', 
}  

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	theme?: ThemeButton;
    customClassNames?: string;
    isButtonAnimation?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
}
  
const Button: FC<ButtonProps> = (props) => {

    const { 
        theme = ThemeButton.CLEAR, 
        children, 
        customClassNames,
        isLoading = false,
        isDisabled = false,
        isButtonAnimation = true,
        ...otherProps
    } = props;

    const mods: Mods = {
        [classes.activeButton]: isButtonAnimation,
        [classes.loading]: isLoading,
        [classes.disabled]: isDisabled,
    };

    return ( 
        <button 
            className={
                classNames(classes.button, 
                    mods, 
                    [ classes[theme], customClassNames ]
                )}
            {...otherProps}
        >
            {isLoading? <Loader/> : children}
        </button>
	 );
};
 
export default Button;
