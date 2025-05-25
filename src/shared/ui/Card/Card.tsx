import { ReactElement } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Card.module.scss';

interface CardProps {
    children: ReactElement;
    className?: string;
    isFullWidth?: boolean;
}

const Card = (props: CardProps) => {
    const { children, className, isFullWidth = false } = props;

    const mods: Mods = {
        [classes.fullWidth]: isFullWidth,
    };

    return <div className={classNames(classes.cardContainer, mods, [className])}>{children}</div>;
};

export default Card;
