import Skeleton from 'shared/ui/Skeleton/Skeleton';
import classes from './ArticleBigCard.module.scss';
import Card from 'shared/ui/Card/Card';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleBigCardSkeletonProps {
    className?: string;
}

const ArticleBigCardSkeleton = (props: ArticleBigCardSkeletonProps) => {
    const { className } = props;

    return (
        <Card className={classNames(classes.container, {}, [className, classes.card])}>
            <>
                <div className={classes.header}>
                    <div className={classes.headerLeftContent}>
                        <div className={classes.headerAuthorInfo}>
                            <Skeleton width="50px" height="50px" border="50%" />
                            <Skeleton width="100px" height="24px" />
                        </div>

                        <div>
                            <Skeleton width="100%" height="32px" />

                            <Skeleton className={classes.typeText} width="50%" height="26px" />
                        </div>
                    </div>
                    <Skeleton width="100px" height="24px" />
                </div>

                <Skeleton className={classes.image} width="100%" height="400px" />

                <Skeleton width="100%" height="72px" />

                <div className={classes.infoContainer}>
                    <Skeleton width="140px" height="52px" />

                    <div className={classes.viewsContainer}>
                        <Skeleton width="30px" height="55px" />
                    </div>
                </div>
            </>
        </Card>
    );
};

export default ArticleBigCardSkeleton;
