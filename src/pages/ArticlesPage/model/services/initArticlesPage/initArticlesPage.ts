import { createAsyncThunk } from '@reduxjs/toolkit';
import {  StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageAction } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, { getState, dispatch }) => {
        const inited = getArticlesPageInited(getState() as StateSchema);

        if(!inited) {
            dispatch(articlesPageAction.initState());
        
            dispatch(fetchArticlesList({
                page: 1
            }));
        }
    }
);