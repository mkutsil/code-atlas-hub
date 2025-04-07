import classes from './LoginForm.module.scss';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {  useForm, Controller } from 'react-hook-form';
import { LoginFormSchema } from './schema';
import { loginReducer } from '../../model/slice/loginSlice';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    onModalClose: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = ({ onModalClose }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onSubmit = (data: { login: string; password: string }) => {
        dispatch(loginByUserName({ userName: data.login, password: data.password }))
            .then((result) => {
                if (loginByUserName.fulfilled.match(result)) {
                    onModalClose();
                    reset();
                }
            });
    };

    const {
        handleSubmit,
        control,
        reset,
    } = useForm<{login: string; password: string}>({
        defaultValues: { login: '', password: '' },
        resolver: yupResolver(LoginFormSchema),
    });

    return ( 
        <DynamicModuleLoader reducers={initialReducers}> 
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.formContainer}>
                    <div className={classes.formContentContainer}>
                        <h2>Login</h2>
                
                        {error && (
                            <div>{error}</div>
                        )}

                        <div className={classes.inputsContainer}>
                            <Controller
                                name="login"
                                control={control}  
                                render={({ field, fieldState }) => (
                                    <Input
                                        {...field} 
                                        placeholder="Login"
                                        isRequired={true}
                                        error={fieldState?.error?.message}
                                    />
                                )}
                            />

                            <Controller
                                name="password"
                                control={control} 
                                render={({ field, fieldState }) => (
                                    <Input
                                        {...field}
                                        placeholder="Password" 
                                        type="password" 
                                        isRequired={true}
                                        error={fieldState?.error?.message} 
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <Button 
                        type='submit'
                        isButtonAnimation={false} 
                        theme={ThemeButton.CONTAINED}
                        isLoading={isLoading}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </DynamicModuleLoader>
        
	 );
};
 
export default LoginForm;