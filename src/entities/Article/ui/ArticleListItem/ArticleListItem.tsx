import { Article, ArticleView } from '../../model/types/article';
import ArticleBigCard from './components/ArticleBigCard/ArticleBigCard';
import ArticleSmallCard from './components/ArticleSmallCard/ArticleSmallCard';

interface ArticleListItemProps {
	article: Article;
	view: ArticleView;
}
 
const ArticleListItem = (props : ArticleListItemProps) => {
    const { article, view } = props;

    const { id, image, views, title, description, type, createdAt, author } = article;

    const isSmallArticleCard = view === ArticleView.SMALL;

    return (
        <>
        
            {isSmallArticleCard ? (
                <ArticleSmallCard
                    id={id}
                    image={image}
                    views={views}
                    title={title}
                    type={type}
                    createdAt={createdAt}
                />
            ) : (
                <ArticleBigCard
                    id={id}
                    image={image}
                    views={views}
                    title={title}
                    description={description}
                    type={type}
                    createdAt={createdAt}
                    author={author}
                />
            )}
        </>
    );
};
 
export default ArticleListItem;