import Button, { ThemeButton } from 'shared/ui/Button/Button';
import classes from './NotFoundPage.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const NotFoundPage = () => (
    <div className={classes.pageContainer}>

        <h1 className={classes.pageTitle}>Not found page (</h1>

        <div>
            <Button theme={ThemeButton.CONTAINED}>
                <AppLink to={RoutePath.home}>Go home</AppLink>	
            </Button>
        </div>
     
    </div>
    
	  );
 
export default NotFoundPage;