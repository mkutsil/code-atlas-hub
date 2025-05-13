import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';
import classes from './CommentList.module.scss';

interface CommentListProps {
	className?: string;
	isLoading?: boolean; 
	comments: Comment[];
}
 
export const CommentList = (props: CommentListProps) => {
    const { className, isLoading, comments } = props;

    return (
        <div className={classNames(classes.commentsContainer, {}, [ className ])}>
            {comments.map((comment) => (
                <CommentCard
                    isLoading={isLoading}
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
        
    );
};
 