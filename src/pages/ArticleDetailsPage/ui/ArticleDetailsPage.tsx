import classes from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Text from 'shared/ui/Text/Text';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { useEffect } from 'react';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import Page from 'shared/ui/Page/Page';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const comments = useSelector(getArticleComments.selectAll);

    const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

    if(!id) {
        <div className={classes.articleDetailsPage}>
            <h1>Стаття не знайдена</h1>
        </div>;
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    }
    , [ dispatch, id ]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classes.articleDetailsPage}>
                <ArticleDetails id={id} />
                <Text title="Comments:" />
                <AddCommentForm />
                <CommentList 
                    comments={comments}
                    isLoading={isCommentsLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;