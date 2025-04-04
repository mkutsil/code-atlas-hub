import classes from './LoginForm.module.scss';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { useAppDispatch } from 'app/providers/StoreProvider/hooks/useAppDispatch';
import { useEffect } from 'react';
 
const LoginForm = () => {

    const dispatch = useAppDispatch();
    const { userName, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUserName = (value: string) => {
        dispatch(loginActions.setUserName(value));
    };

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    const onLoginClick = () => {
        dispatch(loginByUserName({ userName, password }));
    };

    useEffect(() => {
        console.log(error);
    },[ error ]);
	
    return ( 
        <div className={classes.formContainer}>
            <div className={classes.formContentContainer}>
                <h2>Login</h2>
                
                {error && (
                    <div>{error}</div>
                )}

                <div className={classes.inputsContainer}>
                    <Input
                        value={userName}
                        onChange={onChangeUserName}
                        placeholder="Login" 
                    />
                    <Input 
                        value={password} 
                        onChange={onChangePassword} 
                        placeholder="Password" 
                        type="password" 
                    />
                </div>
            </div>

            <Button 
                onClick={onLoginClick}
                isButtonAnimation={false} 
                theme={ThemeButton.CONTAINED}
                isLoading={isLoading}
            >
                Login
            </Button>
        </div>
	 );
};
 
export default LoginForm;