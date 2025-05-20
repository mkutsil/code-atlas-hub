import { classNames } from 'shared/lib/classNames/classNames';
import Card from 'shared/ui/Card/Card';
import classes from './ArticleBigCard.module.scss';
import Text from 'shared/ui/Text/Text';
import { Eye } from 'lucide-react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

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

    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(`${RoutePath.article_details}${id}`);
    };
	
    return (
        <Card 
            key={id} 
            isFullWidth
            className={classNames(classes.container, {}, [ className ])}
        >
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
                    <Button 
                        theme={ThemeButton.CONTAINED}
                        onClick={onButtonClick}
                    >
                        Reed more
                    </Button>

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