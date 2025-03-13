import { useState } from 'react';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import classes from './Sidebar.module.scss';
import { Menu, Newspaper, BookMarked } from 'lucide-react';
import NavigationButton from '../components/NavigationButton/NavigationButton';

const Sidebar = () => {
    const [ collapsed, setCollapsed ] = useState(false);
 
    const handleButtonClick = () => {
        setCollapsed((prev) => !prev);
    }; 
    
    return (  
        <div 
            className={classNames(classes.sidebar, { [classes.collapsed]: collapsed })}>
            <div 
                className={classNames(classes.logoWrapper, 
                    { [classes.logoCollapsed]: collapsed })}
            >
                <LogoIcon/>
            </div>
				 
            <div className={classes.linkWrapper}>
                <Button 
                    customClassNames={classNames(classes.menuButton, { [classes.menuButtonCollapsed]: collapsed })}
                    onClick={handleButtonClick}
                >
                    <Menu/>
                </Button>	

                <NavigationButton label="About" to="/about" isCollapsed={collapsed}>
                    <Newspaper/>
                </NavigationButton>

                <NavigationButton label="Home" to="/" isCollapsed={collapsed}>
                    <BookMarked/>
                </NavigationButton>

            </div>

        </div>
	 );
};
 
export default Sidebar;