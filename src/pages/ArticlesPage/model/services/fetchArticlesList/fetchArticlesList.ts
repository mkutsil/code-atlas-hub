import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
} from '../../selectors/articlesPageSelectors';

interface FetchArticleListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, { extra, rejectWithValue, getState }) => {
    const limit = getArticlesPageLimit(getState() as StateSchema);
    const sort = getArticlesPageSort(getState() as StateSchema);
    const order = getArticlesPageOrder(getState() as StateSchema);
    const search = getArticlesPageSearch(getState() as StateSchema);
    const page = getArticlesPageNum(getState() as StateSchema);

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _order: order,
                _sort: sort,
                q: search,
            },
        });

        return response.data;
    } catch (e) {
        console.error(e);
        return rejectWithValue('error');
    }
});
