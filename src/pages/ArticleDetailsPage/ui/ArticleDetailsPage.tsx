import { useTranslation } from 'react-i18next';
import classes from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
	
    const { t } = useTranslation();
	
    return (
        <div className={classes.articleDetailsPage}>
            ArticleDetailsPage
        </div>
    );
};

export default ArticleDetailsPage;