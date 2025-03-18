import Button, { ThemeButton } from 'shared/ui/Button/Button';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {

    const goHome = () => {
        window.location.href = '/';
    };
    
    return (
        <div className={classes.pageContainer}>
            <h1 className={classes.pageTitle}>Not found page (</h1>

            <div>
                <Button theme={ThemeButton.CONTAINED} onClick={goHome}>
                    Go home
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
