import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

const Navbar = () => ( 
    <div className={classNames(classes.navbar)}>
        <p className={classes.breadcrumbs}>Breadcrumbs</p>
        <div className={classNames(classes.buttonWrapper)}>
            <LanguageSwitcher/>
            <ThemeSwitcher/>
        </div>
    </div>
);
 
export default Navbar;