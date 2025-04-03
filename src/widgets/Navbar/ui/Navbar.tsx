import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import Modal from 'shared/ui/Modal/Modal';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

const Navbar = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    const onToggleModal = () => setIsModalOpen(prev => !prev);

    const handleLogin = () => {
        setIsLoading(true);

        setTimeout(() => {
            onToggleModal();
            setIsLoading(false);
        }, 3000);
    };

    return ( 
        <div className={classNames(classes.navbar)}>
            <p className={classes.breadcrumbs}>Breadcrumbs</p>
            <div className={classNames(classes.buttonWrapper)}>
                <LanguageSwitcher/>
                <ThemeSwitcher/>

                <div>
                    <Button onClick={onToggleModal} theme={ThemeButton.OUTLINED}>
                        Login
                    </Button>
                </div>
                <Modal isOpen={isModalOpen} onClose={onToggleModal}>
                    <div className={classes.formContainer}>
                        <div className={classes.formContentContainer}>
                            <h2>Login</h2>
                        
                            <div className={classes.inputsContainer}>
                                <input className={classes.input} type="text" placeholder='Login' />
                                <input className={classes.input} type="password" placeholder='Password' />
                            </div>
                        </div>

                        <Button isLoading={isLoading} onClick={handleLogin} isButtonAnimation={false} theme={ThemeButton.CONTAINED}>Login</Button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};
 
export default Navbar;