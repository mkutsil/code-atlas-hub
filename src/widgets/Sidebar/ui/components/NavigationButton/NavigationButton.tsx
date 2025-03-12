import { FC, ReactElement } from 'react';
import classes from './NavigationButton.module.scss';
import { NavLink } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface NavigationButtonProps {
	label: string;
	to: string;
	children: ReactElement;
	isCollapsed?: boolean;
}
 
const NavigationButton: FC<NavigationButtonProps> = (props) => {

    const { label, to, isCollapsed= false, children } = props;

    return (
        <NavLink
            className={({ isActive }) => classNames(classes.navigationButtonContainer, 
                { [classes.navigationButtonActiveContainer] : isActive, 
                    [classes.navigationButtonCollapsedContainer] : isCollapsed } )}
            to={to}>
            {
                isCollapsed ? children 
                    : ( 
                        <div className={classes.navigationButtonContentWrap}>
                            {children}
                            <p>{label}</p>
                        </div>
                    )
            } 
        </NavLink>
    );
};
 
export default NavigationButton;