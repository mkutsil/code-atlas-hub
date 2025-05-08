import { useTranslation } from 'react-i18next';
import classes from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';

const ArticleDetailsPage = () => {
	
    const { t } = useTranslation();
	
    return (
        <div className={classes.articleDetailsPage}>
            <ArticleDetails />
        </div>
    );
};

export default ArticleDetailsPage;