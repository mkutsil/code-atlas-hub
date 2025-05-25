import { Comment } from '../../model/types/comment';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './CommentCard.module.scss';
import Avatar, { AvatarSize } from 'shared/ui/Avatar/Avatar';
import Text from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink';

interface CommentCardProps {
    comment: Comment;
    className?: string;
    isLoading?: boolean;
}

const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading)
        return (
            <div className={classNames(classes.commentCard, {}, [className])}>
                <div className={classes.header}>
                    <Skeleton width="30px" height="30px" border="50%" />
                    <Skeleton width="100px" height="16px" />
                </div>
                <Skeleton width="100%" height="50px" />
            </div>
        );

    return (
        <div className={classNames(classes.commentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={classes.header}>
                <Avatar src={comment.user.avatar || ''} alt="user avatar" size={AvatarSize.SMALL} />
                <Text title={comment.user.userName} />
            </AppLink>

            <Text text={comment.text} />
        </div>
    );
};

export default CommentCard;
