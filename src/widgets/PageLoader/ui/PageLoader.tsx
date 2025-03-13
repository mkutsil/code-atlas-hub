import Loader from 'shared/ui/Loader/Loader';
import classes from './PageLoader.module.scss';

const PageLoader = () => ( 
    <div className={classes.pageLoaderContainer}>
        <Loader/>
    </div> 
);
 
export default PageLoader;