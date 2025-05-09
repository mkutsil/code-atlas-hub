import { 
    getArticleDetailsData, 
    getArticleDetailsError, 
    getArticleDetailsIsLoading 
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import classes from './ArticleDetails.module.scss';
interface ArticleDetailsProps {
	id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props : ArticleDetailsProps) => {
    const { id = '1' } = props;
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    let content;

    if(isLoading) {
        content = (
            <div className={classes.skeletonContainer}>
                <Skeleton 
                    width="200px"
                    height="200px"
                    border="50%"
                />

                <Skeleton 
                    width="100%"
                    height="100px"
                />

                <Skeleton 
                    width="100%"
                    height="50px"
                />

                <Skeleton 
                    width="100%"
                    height="50px"
                />

                <Skeleton 
                    width="100%"
                    height="600px"
                />
            </div>
        );
    } else if (error) {
        content = <h1>Error</h1>;
    } else if (data) {
        content = (
            <h1>
                Article
            </h1>
        );
    } else {
        content = <h1>Article not found</h1>;
    }

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [ dispatch, id ]);

    return ( 
        <DynamicModuleLoader reducers={reducers}>
            {content}
        </DynamicModuleLoader>
    );
};
 