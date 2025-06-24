import { GoogleLogin } from '@react-oauth/google';
import { loginByGoogle } from 'features/AuthByUserName/model/services/loginByGoogle/loginByGoogle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Button from 'shared/ui/Button/Button';
import classes from './AuthWithGoogle.module.scss';

interface AuthWithGoogleProps {
    onModalClose: () => void;
}

const AuthWithGoogle = (props: AuthWithGoogleProps) => {
    const { onModalClose } = props;
    const dispatch = useAppDispatch();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSuccess = (response: any) => {
        dispatch(loginByGoogle({ token: response.credential })).then(result => {
            if (loginByGoogle.fulfilled.match(result)) {
                onModalClose();
            }
        });
    };

    return (
        <div className={classes.authWithGoogleContainer}>
            <Button>
                <GoogleLogin onSuccess={handleSuccess} onError={() => alert('Помилка входу')} />
            </Button>
        </div>
    );
};

export default AuthWithGoogle;
