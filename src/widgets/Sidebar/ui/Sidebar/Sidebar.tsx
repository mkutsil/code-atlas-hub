import { FC, useState } from 'react'
import HomeIcon from 'shared/assets/icons/home.svg'
import LogoIcon from 'shared/assets/icons/logo.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink from 'shared/ui/AppLink/AppLink'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import classes from './Sidebar.module.scss'

interface SidebarProps {
	
}
 
const Sidebar: FC<SidebarProps> = () => {

	const [collapsed, setCollapsed] = useState(false)

	const handleButtonClick = () => {
		setCollapsed((prev) => !prev)
	}

	return ( 
		<div 
		className={classNames(classes.sidebar, {[classes.collapsed]: collapsed})}>
				<div 
				className={classNames(classes.logoWrapper, 
									{[classes.logoCollapsed]: collapsed})}
				>
					<LogoIcon/>
				</div>
				
				<div className={classes.linkWrapper}>
					<Button 
						theme={ThemeButton.CONTAINED} 
						onClick={handleButtonClick}
					>
						||||
					</Button>	

					<div>
					<AppLink to="/"><HomeIcon/></AppLink>
					
					</div>
					<AppLink to="/about"><HomeIcon/></AppLink>
				</div>

		</div>
	 );
}
 
export default Sidebar;