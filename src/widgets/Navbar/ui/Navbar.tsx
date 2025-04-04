import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';

const Navbar = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const onToggleModal = () => setIsModalOpen(prev => !prev);

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
                <LoginModal isOpen={isModalOpen} onClose={onToggleModal} />
            </div>
        </div>
    );
};
 
export default Navbar;