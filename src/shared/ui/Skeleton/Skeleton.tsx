import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Skeleton.module.scss';

interface SkeletonProps {
	className? : string;
    width?: string | number;
    height?: string | number;
	border?: string;
}
 
const Skeleton = (props: SkeletonProps) => {
    const {  
        className, 
        border,
        width = '100%',
        height = '100%',
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (  
        <div 
            style={styles}
            className={classNames(classes.skeleton, {}, [ className ])}
        />
    );
};
 
export default memo(Skeleton);
