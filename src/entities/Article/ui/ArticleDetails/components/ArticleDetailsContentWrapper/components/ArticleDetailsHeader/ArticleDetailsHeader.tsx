import classes from './ArticleDetailsHeader.module.scss';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { Eye, CalendarDays } from 'lucide-react';

interface ArticleDetailsHeaderProps {
	image: string;
	title: string;
 	subtitle: string;
 	views: number;
 	createdAt: string;
}
 
const ArticleDetailsHeader = (props : ArticleDetailsHeaderProps) => {
    const { 
        image, 
        title,
        subtitle,
        views,
        createdAt 
    } = props;
	
    return ( 
        <>
            <div className={classes.imageContainer}>
                <img className={classes.articleImage} src={image} alt="article image" />
            </div>
                
            <Text className={classes.articleTitle} title={title} size={TextSize.L}/>

            <Text text={subtitle} size={TextSize.M}/>

            <div className={classes.articleInfo}>
                <Eye/>  
                <Text text={views.toString()}/>
            </div>

            <div className={classes.articleInfo}>
                <CalendarDays/>  
                <Text text={createdAt}/>
            </div>
        </>
	 );
};
 
export default ArticleDetailsHeader;