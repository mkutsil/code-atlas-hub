import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useEffect } from 'react';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ArticleDetailsProps {
	id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props : ArticleDetailsProps) => {
    const { id } = props;
	
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchArticleById('1'));
    }, [ dispatch ]);

    return ( 
        <DynamicModuleLoader reducers={reducers}>
            <h1> 
                ArticleDetails - {id || 'id is undefined'}
            </h1> 
        </DynamicModuleLoader>
    );
};
 