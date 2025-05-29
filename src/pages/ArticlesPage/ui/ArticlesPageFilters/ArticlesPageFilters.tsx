import { ArticleSortField, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlesPageAction } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import classes from './ArticlesPageFilters.module.scss';
import Select, { type SelectOption } from 'shared/ui/Select/Select';
import Card from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';

const ArticlesPageFilters = () => {
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

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

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeSelectSortValue = (value: ArticleSortField) => {
        dispatch(articlesPageAction.setSort(value));
        dispatch(articlesPageAction.setPage(1));
        debounceFetchData();
    };

    const onChangeSelectOrderValue = (value: SortOrder) => {
        dispatch(articlesPageAction.setOrder(value));
        dispatch(articlesPageAction.setPage(1));
        debounceFetchData();
    };

    const onChangSearchValue = (value: string) => {
        dispatch(articlesPageAction.setSearch(value));
        dispatch(articlesPageAction.setPage(1));
        debounceFetchData();
    };

    const articlesTabs = [
        {
            value: ArticleType.ART,
            content: 'Art',
        },
        {
            value: ArticleType.IT,
            content: 'IT',
        },
        {
            value: ArticleType.ECONOMICS,
            content: 'ECONOMICS',
        },
        {
            value: ArticleType.SCIENCE,
            content: 'SCIENCE',
        },
        {
            value: ArticleType.SPORT,
            content: 'SPORT',
        },
        {
            value: ArticleType.HEALTH,
            content: 'HEALTH',
        },
        {
            value: ArticleType.TRAVEL,
            content: 'TRAVEL',
        },
    ];

    const onTabClick = (tabItem: TabItem) => {
        dispatch(articlesPageAction.setType(tabItem.value as ArticleType));
        dispatch(articlesPageAction.setPage(1));
        debounceFetchData();
    };

    return (
        <div className={classes.container}>
            <div className={classes.selectContainer}>
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

                <ArticleViewSelector onViewClick={onViewClick} view={view} />
            </div>
            <Card>
                <Input
                    customClassNames={classes.searchInput}
                    value={search}
                    placeholder="Search"
                    onChange={onChangSearchValue}
                />
            </Card>

            <Tabs tabs={articlesTabs} value={type} onTabClick={onTabClick} />
        </div>
    );
};

export default ArticlesPageFilters;
