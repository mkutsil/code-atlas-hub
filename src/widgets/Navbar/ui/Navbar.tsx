import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink from 'shared/ui/AppLink/AppLink'
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
						<button onClick={toggleTheme}>Change language</button>
						<button onClick={toggleTheme}>Change theme</button>
				</div>
		</div>
	 );
}
 
export default Navbar;