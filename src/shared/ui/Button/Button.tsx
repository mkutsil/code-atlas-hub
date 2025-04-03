import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
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
}
  
const Button: FC<ButtonProps> = (props) => {

    const { 
        theme = ThemeButton.CLEAR, 
        children, 
        customClassNames,
        isLoading = false,
        isButtonAnimation = true,
        ...otherProps
    } = props;

    return ( 
        <button 
            className={
                classNames(classes.button, 
                    { 
                        [classes.activeButton]: isButtonAnimation,
                        [classes.isLoading]: isLoading,
                    }, 
                    [ classes[theme], customClassNames ]
                )}
            {...otherProps}
        >
            {isLoading? <Loader/> : children}
        </button>
	 );
};
 
export default Button;
