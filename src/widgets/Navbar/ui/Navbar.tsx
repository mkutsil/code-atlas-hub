import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { FC } from 'react'
import LocalesIcon from 'shared/assets/icons/locales.svg'
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import classes from './Navbar.module.scss'

//! TODO create toggle theme component in widgets

const Navbar: FC = () => {
    const {toggleTheme} = useTheme();

    return ( 
        <div className={classNames(classes.navbar)}>
            <p>Breadcrumbs</p>
            <div className={classNames(classes.buttonWrapper)}>
                <Button><LocalesIcon/></Button>
                <Button theme={ThemeButton.OUTLINED}>Outlined</Button>
                <Button theme={ThemeButton.CONTAINED}>Outlined</Button>
                <Button onClick={toggleTheme}><ThemeSwitcherIcon/></Button>
            </div>
        </div>
	 );
}
 
export default Navbar;