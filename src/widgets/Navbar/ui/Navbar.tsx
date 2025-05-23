import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Avatar, { AvatarSize } from 'shared/ui/Avatar/Avatar';
import DropdownMenu from 'shared/ui/DropdownMenu/DropdownMenu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    
    const onToggleModal = () => setIsModalOpen(prev => !prev);

    const onLogout = () => {
        dispatch(userActions.logout());
    };
    const authData = useSelector(getUserAuthData);

    const handleRedirectToProfile = () => {
        navigate(`/profile/${userData?.id}`);
    };

    const dropdownMenuConfig = [
        { label: 'Profile', action: handleRedirectToProfile },
        { label: 'Logout', action: onLogout }, 
    ];

    return ( 
        <header className={classNames(classes.navbar)}>
            <p className={classes.breadcrumbs}>Breadcrumbs</p>
            <div className={classNames(classes.buttonWrapper)}>
                <LanguageSwitcher/>
                <ThemeSwitcher/>

                <div>
                    {authData ? (
                        <div className={classNames(classes.loginElementContainer)}>
                            <DropdownMenu
                                dropdownMenuConfig={dropdownMenuConfig}
                            >
                                <Avatar 
                                    size={AvatarSize.SMALL} 
                                    src={ authData?.avatar || '' } 
                                    alt={authData.userName}
                                />
                            </DropdownMenu>
                        </div>
                  
                    ) : (
                        <Button onClick={onToggleModal} theme={ThemeButton.OUTLINED}>
                            Login
                        </Button>
                    )}
                    
                </div>
                {isModalOpen && (
                    <LoginModal isOpen={isModalOpen} onClose={onToggleModal} />
                )}
            </div>
        </header>
    );
};
 
export default Navbar;