import Modal from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Suspense } from 'react';
import Loader from 'shared/ui/Loader/Loader';

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
} 
 
export const LoginModal =  ({ isOpen,  onClose } : LoginModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader/>}>
            <LoginFormAsync onModalClose={onClose}/>
        </Suspense>
    </Modal>
);
 