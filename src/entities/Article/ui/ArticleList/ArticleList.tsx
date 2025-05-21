import { Article, ArticleView } from 'entities/Article/model/types/article';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './ArticleList.module.scss';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleBigCardSkeleton from '../ArticleListItem/components/ArticleBigCard/ArticleBigCardSkeleton';
import ArticleSmallCardSkeleton from '../ArticleListItem/components/ArticleSmallCard/ArticleSmallCardSkeleton';

interface ArticleListProps {
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	className?: string;
}
 
export const ArticleList = (props : ArticleListProps) => {
    const { 
        articles, 
        isLoading, 
        view = ArticleView.SMALL,
        className,
		 } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem 
            article={article} 
            view={view} 
        />
    );

    const isSmallArticleCard = view === ArticleView.SMALL;

    const renderArticleSkeleton = () => new Array(8)
        .fill(0)
        .map((_, index) => isSmallArticleCard ? 
            (
                <ArticleSmallCardSkeleton 
                    key={index} />
            )
            : 
            (
                <ArticleBigCardSkeleton 
                    key={index}
                />
            )
        );

    const mods: Mods = {
        [classes.grid]: view === ArticleView.SMALL,
        [classes.list]: view === ArticleView.BIG,
    };
	
    return ( 
        <div className={classNames(classes.articleListContainer, mods, [ className ])}>
            {articles.length > 0 && isLoading ? 
                renderArticleSkeleton()
                : articles.map(renderArticle)
            }
        </div>
    );
};
 