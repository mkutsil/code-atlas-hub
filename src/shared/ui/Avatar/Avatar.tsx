import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Avatar.module.scss';

export enum AvatarSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface AvatarProps {
    src: string;
    alt: string;
    size?: AvatarSize;
    className?: string;
}

const Avatar = (props: AvatarProps) => {
    const { src, size = AvatarSize.MEDIUM, alt, className, ...otherProps } = props;
    return (
        <img
            className={classNames(classes.avatar, {}, [className, classes[size]])}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
};

export default Avatar;
