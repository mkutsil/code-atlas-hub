import { BugButton } from 'app/providers/ErrorBoundary';
import classes from './HomePage.module.scss';

const HomePage = () => (
    <div className={classes.homePageContainer}>
        <h1>CodeAtlasHub</h1>

        <div><BugButton/></div>
    </div>
);

export default HomePage;