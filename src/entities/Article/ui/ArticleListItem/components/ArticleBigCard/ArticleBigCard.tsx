import { classNames } from 'shared/lib/classNames/classNames';
import Card from 'shared/ui/Card/Card';
import classes from './ArticleBigCard.module.scss';
import Text, { TextMaxLines, TextSize } from 'shared/ui/Text/Text';
import { Eye } from 'lucide-react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useBreakpoint } from 'shared/lib/hooks/useBreakpoint/useBreakpoint';
import { Article } from 'entities/Article/model/types/article';
import Avatar, { AvatarSize } from 'shared/ui/Avatar/Avatar';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

// TODO add onError props to images, create general image component
interface ArticleBigCardProps extends Omit<Article, 'subtitle' | 'blocks'> {
    className?: string;
    isOpenInNewTab?: boolean;
}

const ArticleBigCard = (props: ArticleBigCardProps) => {
    const {
        id,
        image,
        views,
        title,
        description,
        type,
        createdAt,
        user,
        isOpenInNewTab = false,
        className,
    } = props;

    const { isMobile } = useBreakpoint();

    return (
        <Card key={id} className={classNames(classes.container, {}, [className, classes.card])}>
            <>
                <div className={classes.header}>
                    <div className={classes.headerLeftContent}>
                        <div className={classes.headerAuthorInfo}>
                            <Avatar src={user.avatar} alt="author avatar" size={AvatarSize.SMALL} />
                            <Text size={isMobile ? TextSize.S : TextSize.M} text={user.userName} />
                        </div>

                        <div>
                            <Text
                                titleMarginBottom={false}
                                size={isMobile ? TextSize.S : TextSize.M}
                                title={title}
                                titleMaxLines={TextMaxLines.TWO}
                            />

                            <Text
                                size={isMobile ? TextSize.S : TextSize.M}
                                className={classes.typeText}
                                text={type.join(', ')}
                                textMaxLines={TextMaxLines.TWO}
                            />
                        </div>
                    </div>

                    <Text
                        size={isMobile ? TextSize.S : TextSize.M}
                        className={classes.createdAtText}
                        text={createdAt}
                    />
                </div>

                <img className={classes.image} src={image} alt={title} />

                <Text
                    size={isMobile ? TextSize.S : TextSize.M}
                    text={description}
                    textMaxLines={TextMaxLines.THREE}
                />

                <div className={classes.infoContainer}>
                    <AppLink
                        to={`${RoutePath.article_details}${id}`}
                        isOpenInNewTab={isOpenInNewTab}
                    >
                        <Button theme={ThemeButton.CONTAINED}>Reed more</Button>
                    </AppLink>

                    <div className={classes.viewsContainer}>
                        <Eye />
                        <Text size={isMobile ? TextSize.S : TextSize.M} text={String(views)} />
                    </div>
                </div>
            </>
        </Card>
    );
};

export default ArticleBigCard;
