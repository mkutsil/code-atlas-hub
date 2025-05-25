import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import ArticleDetailsSkeleton from './components/ArticleDetailsSkeleton/ArticleDetailsSkeleton';
import ArticleDetailsContent from './components/ArticleDetailsContent/ArticleDetailsContent';
import ArticleDetailsHeader from './components/ArticleDetailsHeader/ArticleDetailsHeader';

const ArticleDetailsContentWrapper = () => {
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    if (isLoading) return <ArticleDetailsSkeleton />;
    else if (error) return <h1>Error</h1>;
    else if (!data) return <h1>Data not found</h1>;

    return (
        <div>
            <ArticleDetailsHeader
                image={data.image}
                title={data.title}
                subtitle={data.subtitle}
                views={data.views}
                createdAt={data.createdAt}
            />

            <ArticleDetailsContent blocks={data.blocks} />
        </div>
    );
};

export default ArticleDetailsContentWrapper;
