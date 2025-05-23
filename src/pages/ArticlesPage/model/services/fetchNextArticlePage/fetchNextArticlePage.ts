import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum } from '../../selectors/articlesPageSelectors';
import { articlesPageAction } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// TODO: add test

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articleDetails/fetchNextArticlePage',
    async (_, { getState, dispatch }) => {
        const hasMore = getArticlesPageHasMore(getState() as StateSchema);
        const page = getArticlesPageNum(getState() as StateSchema);
        const isLoading = getArticlesPageIsLoading(getState() as StateSchema);

        if(hasMore && !isLoading){
            dispatch(articlesPageAction.setPage(page + 1));
               
            dispatch(fetchArticlesList({
                page: page + 1
            }));
        }
    }
);