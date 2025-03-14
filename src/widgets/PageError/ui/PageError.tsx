import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import classes from './PageError.module.scss';

const PageError = () => {
    const { t } = useTranslation();
      
    const onReloadPage = () => {
        location.reload();
    };
       
    return ( 
        <div className={classes.pageContainer}>
            <h2>Page Error</h2>
            <Button onClick={onReloadPage} theme={ThemeButton.CONTAINED}>Reload page</Button>
        </div>

	 );
};
 
export default PageError;