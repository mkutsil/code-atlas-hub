import { useTranslation } from 'react-i18next';
import classes from './ArticlesPage.module.scss';

const ArticlesPage = () => {
	
    const { t } = useTranslation();
	
    return (
        <div className={classes.articlesPage}>
            ArticlesPage
        </div>
    );
};

export default ArticlesPage;