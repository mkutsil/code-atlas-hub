import { ReactElement } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Card.module.scss';

interface CardProps {
	children: ReactElement;
	className?: string;
}
 
const Card = (props : CardProps) => {
    const { children, className } = props;
    return ( 
        <div className={classNames(classes.cardContainer, {}, [ className ])}>
            {children}
        </div>
	 );
};
 
export default Card;