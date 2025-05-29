import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageAction } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, { getState, dispatch }) => {
        const inited = getArticlesPageInited(getState() as StateSchema);

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type');

            if (orderFromUrl) {
                dispatch(articlesPageAction.setOrder(orderFromUrl));
            }

            if (sortFromUrl) {
                dispatch(articlesPageAction.setSort(sortFromUrl));
            }

            if (searchFromUrl) {
                dispatch(articlesPageAction.setSearch(searchFromUrl));
            }

            if (typeFromUrl) {
                dispatch(articlesPageAction.setType(typeFromUrl as ArticleType));
            }

            dispatch(articlesPageAction.initState());
            dispatch(fetchArticlesList({}));
        }
    }
);
