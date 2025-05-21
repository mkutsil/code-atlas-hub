import { classNames } from 'shared/lib/classNames/classNames';
import Card from 'shared/ui/Card/Card';
import classes from './ArticleSmallCard.module.scss';
import Text, { TextMaxLines } from 'shared/ui/Text/Text';
import { Eye } from 'lucide-react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink';

interface ArticleSmallCardProps {
	id: string;
	image: string;
	views: number;
	title: string;
	type: string[];
	createdAt: string;
	className?: string;
}
 
const ArticleSmallCard = (props: ArticleSmallCardProps) => {
    const {
        id,
        image,
        views,
        title,
        type,
        createdAt,
        className
    } = props;
	
    return (
        <AppLink 
            to={`${RoutePath.article_details}${id}`} 
        >
            <Card className={classNames(classes.container, {}, [ className ])}>
                <>
                    <Text className={classes.createdAtText} text={createdAt}/>
   
                    <img 
                        className={classes.image} 
                        src={image}
                        alt={title} 
                    />
 
                    <div className={classes.infoContainer}>
                        <Text className={classes.typeText} text={type.join(', ')}/>

                        <div className={classes.viewsContainer}>
                            <Eye/>  
                            <Text text={String(views)}/>
                        </div>
                    </div>

                    <Text 
                        titleMarginBottom={false}
                        title={title}
                        titleMaxLines={TextMaxLines.THREE}
                    />
                </>
            </Card>
        </AppLink>
    );
};
 
export default ArticleSmallCard;