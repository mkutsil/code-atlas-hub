import { BugButton } from 'app/providers/ErrorBoundary';
import classes from './HomePage.module.scss';
import GridTable from './components/GridTable/GridTable';
import Page from 'shared/ui/Page/Page';

const HomePage = () => (
    <Page className={classes.homePageContainer}>
        <h1>CodeAtlasHub</h1>

        <div><BugButton/></div>
       
        <GridTable/>
    </Page>
);

export default HomePage;