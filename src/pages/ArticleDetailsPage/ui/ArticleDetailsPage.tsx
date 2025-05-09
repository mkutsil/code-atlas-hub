import classes from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {

    const { id } = useParams<{ id: string }>();

    if(!id) {
        <div className={classes.articleDetailsPage}>
            <h1>Стаття не знайдена</h1>
        </div>;
    }

    return (
        <div className={classes.articleDetailsPage}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;