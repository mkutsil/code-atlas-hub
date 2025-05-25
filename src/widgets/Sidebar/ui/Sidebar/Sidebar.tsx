import { useEffect, useState } from 'react';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import classes from './Sidebar.module.scss';
import { Menu } from 'lucide-react';
import SidebarItemsList from '../components/SidebarItemsList/SidebarItemsList';
import { useBreakpoint } from 'shared/lib/hooks/useBreakpoint/useBreakpoint';

const Sidebar = () => {
    const { isMobileOrTablet } = useBreakpoint();

    const [collapsed, setCollapsed] = useState(isMobileOrTablet ? true : true);

    const handleButtonClick = () => {
        setCollapsed(prev => !prev);
    };

    useEffect(() => {
        if (isMobileOrTablet) setCollapsed(true);
        else setCollapsed(false);
    }, [isMobileOrTablet]);

    return (
        <menu
            data-testid="sidebar"
            className={classNames(classes.sidebar, {
                [classes.collapsed]: collapsed,
            })}
        >
            <div className={classNames(classes.logoWrapper)}>
                <LogoIcon />
                <p
                    className={classNames(classes.logoText, {
                        [classes.logoTextCollapsed]: collapsed,
                    })}
                >
                    CodeAtlasHub
                </p>
            </div>

            <div className={classes.linkWrapper}>
                <Button
                    data-testid="toggle-button"
                    className={classNames(classes.menuButton, {
                        [classes.menuButtonCollapsed]: collapsed,
                    })}
                    onClick={handleButtonClick}
                >
                    <Menu />
                </Button>

                <SidebarItemsList collapsed={collapsed} />
            </div>
        </menu>
    );
};

export default Sidebar;
