import { classNames } from 'shared/lib/classNames/classNames';
import Card from 'shared/ui/Card/Card';
import classes from './ArticleBigCard.module.scss';
import Text from 'shared/ui/Text/Text';
import { Eye } from 'lucide-react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ArticleBigCardProps {
	id: string;
	image: string;
	views: number;
	title: string;
	type: string[];
	createdAt: string;
	className?: string;
}
 
const ArticleBigCard = (props: ArticleBigCardProps) => {
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
        <Card key={id} className={classNames(classes.container, {}, [ className ])}>
            <>
                <div className={classes.header}>
                    <Text className={classes.createdAtText} text={createdAt}/>
                    <Text className={classes.createdAtText} text={createdAt}/>

                </div>

                <Text title={title}/>

                <Text className={classes.typeText} text={type.join(', ')}/>

                <img 
                    className={classes.image} 
                    src={image}
								 				alt={title} 
								 		/>

                <div className={classes.infoContainer}>
                    <Button theme={ThemeButton.CONTAINED}>Reed more</Button>

                    <div className={classes.viewsContainer}>
                        <Eye/>  
                        <Text text={String(views)}/>
                    </div>
                </div>

            </>
        </Card>
    );
};
 
export default ArticleBigCard;