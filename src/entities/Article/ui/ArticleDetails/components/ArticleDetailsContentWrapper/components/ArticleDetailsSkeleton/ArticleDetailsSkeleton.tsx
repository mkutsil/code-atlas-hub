import Skeleton from 'shared/ui/Skeleton/Skeleton';
import classes from './ArticleDetailsSkeleton.module.scss';

const ArticleDetailsSkeleton = () => (
    <div className={classes.skeletonContainer}>
        <Skeleton width="100%" height="500px" />

        <Skeleton width="100%" height="100px" />

        <Skeleton width="100%" height="50px" />

        <Skeleton width="100%" height="50px" />

        <Skeleton width="100%" height="600px" />
    </div>
);

export default ArticleDetailsSkeleton;
