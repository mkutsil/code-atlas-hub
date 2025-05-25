import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleViewSelector.module.scss';
import Button from 'shared/ui/Button/Button';
import { ArticleView } from '../../model/types/article';
import { Rows2, Grid2x2 } from 'lucide-react';

interface ArticleViewSelectorProps {
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
    className?: string;
}

const viewButtonConfig = [
    { view: ArticleView.BIG, icon: <Grid2x2 /> },
    { view: ArticleView.SMALL, icon: <Rows2 /> },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { view, onViewClick, className } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };

    return (
        <div className={classNames(classes.container, {}, [className])}>
            {viewButtonConfig.map(item => (
                <Button
                    key={item.view}
                    onClick={onClick(item.view)}
                    className={classNames(classes.viewButton, {
                        [classes.viewActiveButton]: item.view === view,
                    })}
                >
                    {item.icon}
                </Button>
            ))}
        </div>
    );
};
