import { useState } from 'react';
import classes from './LoginForm.module.scss';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
 
const LoginForm = () => {
    const [ loginValue, setLoginValue ] = useState('');
    const [ passwordValue, setPasswordValue ] = useState('');

    const changeLoginValue = (value: string) => {
        setLoginValue(value);
    };

    const changePasswordValue = (value: string) => {
        setPasswordValue(value);
    };
	
    return ( 
        <div className={classes.formContainer}>
            <div className={classes.formContentContainer}>
                <h2>Login</h2>

                <div className={classes.inputsContainer}>
                    <Input
                        value={loginValue}
                        onChange={changeLoginValue}
                        placeholder="Login" 
                    />
                    <Input 
                        value={passwordValue} 
                        onChange={changePasswordValue} 
                        placeholder="Password" 
                        type="password" 
                    />
                </div>
            </div>

            <Button isButtonAnimation={false} theme={ThemeButton.CONTAINED}>Login</Button>
        </div>
	 );
};
 
export default LoginForm;