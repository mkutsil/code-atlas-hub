import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINED = 'outlined',
	CONTAINED = 'contained',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	theme?: ThemeButton;
}
 
const Button: FC<ButtonProps> = (props) => {

    const { theme = ThemeButton.CLEAR, children, ...otherProps} = props;

    return ( 
        <button 
            className={classNames(classes.button, {}, [classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
	 );
}
 
export default Button;
