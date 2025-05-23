import { classNames } from 'shared/lib/classNames/classNames';
import Card from 'shared/ui/Card/Card';
import classes from './ArticleSmallCard.module.scss';
import Skeleton from 'shared/ui/Skeleton/Skeleton';

interface ArticleSmallCardSkeletonProps {
	className?: string;
}
 
const ArticleSmallCard = (props: ArticleSmallCardSkeletonProps) => {
    const { className } = props;
	
    return (
        <Card className={classNames(classes.container, {}, [ className ])}>
            <>
                <Skeleton 
                    className={classes.image}
                    width="100%"
                    height="250px"
                />
 
                <div className={classes.infoContainer}>
                    <Skeleton 
                        className={classes.typeText}
                        width="100px"
                        height="24px"
                    />

                    <div className={classes.viewsContainer}>
                        <Skeleton 
                            width="55px"
                            height="24px"
                        />
                    </div>
                </div>

                <Skeleton 
                    width="100%"
                    height="24px"
                />
            </>
        </Card>
    );
};
 
export default ArticleSmallCard;