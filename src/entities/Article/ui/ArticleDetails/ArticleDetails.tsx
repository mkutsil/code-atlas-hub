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
import Text, { TextSize } from 'shared/ui/Text/Text';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
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

    const renderBlock = (block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent 
                    key={block.id}
                    code={block.code}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    title={block.title}
                    src={block.src}
                    alt={block.alt}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    title={block.title}
                    paragraphs={block.paragraphs}
                />
            );
        }
    };

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
            <div>
                <Text title={data.title} size={TextSize.M}/>
                <Text text={data.subtitle} size={TextSize.S}/>

                <Text text={`views ${data.views}`}/>
                <Text text={data.createdAt}/>

                {data.blocks.map((block) => renderBlock(block))}
            </div>
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
 