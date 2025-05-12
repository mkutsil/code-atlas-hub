import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useEffect } from 'react';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import ArticleDetailsContentWrapper from './components/ArticleDetailsContentWrapper/ArticleDetailsContentWrapper';

interface ArticleDetailsProps {
	id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props : ArticleDetailsProps) => {
    const { id = '1' } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [ dispatch, id ]);

    return ( 
        <DynamicModuleLoader reducers={reducers}>
            <ArticleDetailsContentWrapper />
        </DynamicModuleLoader>
    );
};
 