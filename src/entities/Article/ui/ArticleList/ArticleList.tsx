import { Article, ArticleView } from 'entities/Article/model/types/article';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './ArticleList.module.scss';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	className?: string;
}
 
export const 	ArticleList = (props : ArticleListProps) => {
    const { 
        articles, 
        isLoading, 
        view = ArticleView.BIG,
        className,
		 } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem 
            article={article} 
            view={view} 
        />
    );

		 const mods: Mods = {
        [classes.grid]: view === ArticleView.SMALL,
        [classes.list]: view === ArticleView.BIG,
    };
	
    return ( 
        <div className={classNames(classes.articleListContainer, mods, [ className ])}>
            {articles.length > 0 && !isLoading ? articles.map(renderArticle) : null}
        </div>
		 );
};
 