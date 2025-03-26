import { BugButton } from 'app/providers/ErrorBoundary';
import classes from './HomePage.module.scss';
import GridTable from './components/GridTable/GridTable';

const HomePage = () => (
    <div className={classes.homePageContainer}>
        <h1>CodeAtlasHub</h1>

        <div><BugButton/></div>
       
        <GridTable/>
    </div>
);

export default HomePage;