import classes from './ArticlesPage.module.scss';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageAction, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {  useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors';
import Text, { TextSize } from 'shared/ui/Text/Text';
import Page from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    
    const articles = useSelector(getArticles.selectAll);

    const onViewClick = (newView: ArticleView) => {
        dispatch(articlesPageAction.setView(newView));
    };

    const onLoadNextPart = () => {
        dispatch(fetchNextArticlePage());
    };

    useEffect(() => {
        dispatch(initArticlesPage());
        
    }, [ dispatch ]);

    if(error) return <Text title='Error' size={TextSize.L}/>;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page 
                className={classes.articlesPage}
                onScrollEnd={onLoadNextPart}
            >

                <ArticleViewSelector
                    onViewClick={onViewClick}
                    view={view}
                />

                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                />
            </Page>
        </DynamicModuleLoader>
    );};

export default ArticlesPage;