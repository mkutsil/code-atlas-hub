import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINED = 'outlined',
	CONTAINED = 'contained',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	theme?: ThemeButton;
    customClassNames?: string;
}
  
const Button: FC<ButtonProps> = (props) => {

    const { 
        theme = ThemeButton.CLEAR, 
        children, 
        customClassNames,
        ...otherProps
    } = props;

    return ( 
        <button 
            className={classNames(classes.button, {}, [ classes[theme], customClassNames ])}
            {...otherProps}
        >
            {children}
        </button>
	 );
};
 
export default Button;
