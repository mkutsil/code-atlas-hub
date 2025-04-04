import { InputHTMLAttributes, ChangeEvent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
    isRequired?: boolean;
    type?: string;
    customClassNames?: string;
}
  
const Input  = (props: InputProps) => {
    const { 
        placeholder,
        value,
        onChange,
        isRequired = true,
        type = 'text',
        customClassNames,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return ( 
        <div className={classNames(classes.textField, {}, [ customClassNames ])}>
            <input 
                className={classes.input} 
                value={value || ''}
                onChange={onChangeHandler}
                type={type} 
                required={isRequired} 
                {...otherProps} 
            />

            <label 
                className={classes.placeholder}
            >
                {placeholder}
            </label>
        </div>
       
	 );
};
 
export default Input;
