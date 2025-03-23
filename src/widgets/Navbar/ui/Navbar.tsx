import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import Modal from 'shared/ui/Modal/Modal';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

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
                        setIsModalOpen
                    </Button>
                </div>
                <Modal isOpen={isModalOpen} onClose={onToggleModal}>
                    Velit eiusmod aliqua sint dolore sit proident adipisicing excepteur sint id aliquip incididunt. Qui dolore aliqua Lorem sit deserunt velit. Nisi occaecat exercitation occaecat nisi aliquip nisi est nisi. Laborum amet occaecat eiusmod ea excepteur incididunt ullamco anim anim consequat excepteur. Dolor aliquip non laborum voluptate ex. Voluptate ullamco eu ea laborum.
                </Modal>
            </div>
        </div>
    );
};
 
export default Navbar;