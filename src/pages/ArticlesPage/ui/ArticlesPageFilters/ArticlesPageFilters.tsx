import { ArticleSortField, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlesPageAction } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import classes from './ArticlesPageFilters.module.scss';
import Select, { type SelectOption } from 'shared/ui/Select/Select';
import Card from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';

const ArticlesPageFilters = () => {
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);

    const onViewClick = (newView: ArticleView) => {
        dispatch(articlesPageAction.setView(newView));
    };

    const selectSortOptions: SelectOption<ArticleSortField>[] = [
        { label: 'created', value: ArticleSortField.CREATED },
        { label: 'title', value: ArticleSortField.TITLE },
        { label: 'views', value: ArticleSortField.VIEWS },
    ];

    const selectOrderOptions: SelectOption<SortOrder>[] = [
        { label: 'ASC', value: 'asc' },
        { label: 'DESC', value: 'desc' },
    ];

    const fetchData = () => {
        dispatch(fetchArticlesList({ replace: true }));
    };

    const onChangeSelectSortValue = (value: ArticleSortField) => {
        dispatch(articlesPageAction.setSort(value));
        dispatch(articlesPageAction.setPage(1));
        fetchData();
    };

    const onChangeSelectOrderValue = (value: SortOrder) => {
        dispatch(articlesPageAction.setOrder(value));
        dispatch(articlesPageAction.setPage(1));
        fetchData();
    };

    const onChangSearchValue = (value: string) => {
        dispatch(articlesPageAction.setSearch(value));
        dispatch(articlesPageAction.setPage(1));
        fetchData();
    };

    return (
        <div className={classes.container}>
            <Select
                className={classes.selectField}
                placeholder="Article sort by"
                value={sort}
                options={selectSortOptions}
                onChange={onChangeSelectSortValue}
            />

            <Select
                className={classes.selectField}
                placeholder="Article order by"
                value={order}
                options={selectOrderOptions}
                onChange={onChangeSelectOrderValue}
            />

            <Card>
                <Input value={search} placeholder="Search" onChange={onChangSearchValue} />
            </Card>

            <ArticleViewSelector onViewClick={onViewClick} view={view} />
        </div>
    );
};

export default ArticlesPageFilters;
