import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { FC } from 'react'
import LocalesIcon from 'shared/assets/icons/locales.svg'
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink from 'shared/ui/AppLink/AppLink'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import classes from './Navbar.module.scss'

interface NavbarProps {
	
}


const Navbar: FC<NavbarProps> = () => {
	const {theme, toggleTheme} = useTheme();

	return ( 
		<div className={classNames(classes.navbar)}>
				<div className={classNames(classes.linkWrapper)}>
						<AppLink className='link' to="/about">About page</AppLink>
						<AppLink className='link' to="/">Home page</AppLink>
				</div>

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