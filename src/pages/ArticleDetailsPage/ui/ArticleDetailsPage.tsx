import classes from './ArticleDetailsPage.module.scss';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useNavigate, useParams } from 'react-router-dom';
import DynamicModuleLoader, {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Text from 'shared/ui/Text/Text';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { useEffect } from 'react';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import Page from 'widgets/Page/Page';
import Button from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { MoveLeft } from 'lucide-react';
import {
    articleDetailsRecommendationsReducer,
    getArticleRecommendations,
} from '../model/slices/articleDetailsRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations';
import { fetchArticlesRecommendations } from '../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendations: articleDetailsRecommendationsReducer,
};

const ArticleDetailsPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const comments = useSelector(getArticleComments.selectAll);

    const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

    const isRecommendsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    if (!id) {
        <div className={classes.articleDetailsPage}>
            <h1>Стаття не знайдена</h1>
        </div>;
    }

    const handleGoBack = () => {
        navigate(RoutePath.articles);
    };

    useEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
            dispatch(fetchArticlesRecommendations());
        }
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classes.articleDetailsPage}>
                <Button onClick={handleGoBack} className={classes.button}>
                    <MoveLeft />
                </Button>
                <ArticleDetails id={id} />
                <Text title="Comments:" />
                <AddCommentForm />
                <CommentList comments={comments} isLoading={isCommentsLoading} />
                <Text title="Recommendations:" />
                <ArticleList
                    articles={recommendations}
                    isLoading={isRecommendsLoading}
                    isOpenArticleInNewTab
                    className={classes.recommendationsList}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
