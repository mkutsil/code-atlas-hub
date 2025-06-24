import Modal from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Suspense } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthWithGoogle from './components/AuthWithGoogle/AuthWithGoogle';
interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const googleClientId = '214372158499-cmen0fuupvj4fhls7bua4subdpr453oe.apps.googleusercontent.com';

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onModalClose={onClose} />

            <GoogleOAuthProvider clientId={googleClientId}>
                <AuthWithGoogle onModalClose={onClose} />
            </GoogleOAuthProvider>
        </Suspense>
    </Modal>
);
