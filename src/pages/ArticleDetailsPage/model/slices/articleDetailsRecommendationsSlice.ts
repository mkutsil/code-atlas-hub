import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';
import { Article } from 'entities/Article';
import { fetchArticlesRecommendations } from '../services/fetchArticlesRecommendations/fetchArticlesRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>();

const initialArticleDetailsRecommendationsState =
    recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    });

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsRecommendations ?? initialArticleDetailsRecommendationsState
);

export const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: initialArticleDetailsRecommendationsState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchArticlesRecommendations.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
