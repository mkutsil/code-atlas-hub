import classes from './ArticlesPage.module.scss';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageAction, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors';
import Text, { TextSize } from 'shared/ui/Text/Text';

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

    useEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageAction.initState());
    }, [ dispatch ]);

    if(error) return <Text title='Error' size={TextSize.L}/>;

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classes.articlesPage}>

                <ArticleViewSelector
                    onViewClick={onViewClick}
                    view={view}
                />

                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                />
            </div>
        </DynamicModuleLoader>
    );};

export default ArticlesPage;