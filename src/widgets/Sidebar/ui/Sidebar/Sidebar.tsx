import { useState } from 'react';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import classes from './Sidebar.module.scss';
import { Menu } from 'lucide-react';
import SidebarItemsList from '../components/SidebarItemsList/SidebarItemsList';
   
const Sidebar = () => {
    const [ collapsed, setCollapsed ] = useState(false);
 
    const handleButtonClick = () => {
        setCollapsed((prev) => !prev);
    };  

    return (
        <div 
            data-testid="sidebar"
            className={classNames(classes.sidebar, { [classes.collapsed]: collapsed })}>
            <div 
                className={classNames(classes.logoWrapper)}
            >
                <LogoIcon />
                <p className={classNames(classes.logoText, { [classes.logoTextCollapsed]: collapsed })}>
                    CodeAtlasHub
                </p>
            </div>  

            <div className={classes.linkWrapper}>
                <Button
                    data-testid="toggle-button" 
                    customClassNames={classNames(classes.menuButton, { [classes.menuButtonCollapsed]: collapsed })}
                    onClick={handleButtonClick}
                >
                    <Menu/>
                </Button>	

                <SidebarItemsList collapsed={collapsed}/>
            </div>
        </div>
	 );
};
 
export default Sidebar;