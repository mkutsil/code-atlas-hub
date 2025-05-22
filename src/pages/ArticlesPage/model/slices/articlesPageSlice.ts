import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { Article, ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_KEY } from 'shared/const/localstorage';

const articlesAdapter = createEntityAdapter<Article>();

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.BIG
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_KEY, action.payload);
        },
        initState: state => {
            state.view = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView;
        }    
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    }
});

export const { reducer: articlesPageReducer, actions: articlesPageAction } = articlesPageSlice;
