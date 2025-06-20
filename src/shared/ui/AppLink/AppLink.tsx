import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    isOpenInNewTab?: boolean;
}

const AppLink: FC<AppLinkProps> = props => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        isOpenInNewTab = false,
        ...otherProps
    } = props;

    const linkTarget = isOpenInNewTab ? '_blank' : '_self';

    return (
        <Link
            to={to}
            className={classNames(`${classes.appLink}`, {}, [className, classes[theme]])}
            target={linkTarget}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
