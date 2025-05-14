import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getUserAuthData } from 'entities/User';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, { extra, rejectWithValue, getState, dispatch }) => {
         
        const article = getArticleDetailsData(getState() as StateSchema);
        const userData = getUserAuthData(getState() as StateSchema);

        if(!userData || !article){
            return rejectWithValue('no data');
        }

        try{
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                return rejectWithValue('error');
            }
            
            dispatch(fetchCommentsByArticleId(article.id));
            return response.data;
        } catch (e){
            console.error(e);
            return rejectWithValue('error');
        }
    }
);