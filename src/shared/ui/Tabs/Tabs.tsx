import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Tabs.module.scss';
import Card from '../Card/Card';
import Text from '../Text/Text';

export interface TabItem {
    value: string;
    content: string;
}

interface TabsProps {
    tabs: TabItem[];
    value: string;
    onTabClick: (tabItem: TabItem) => void;
    className?: string;
}

const Tabs = (props: TabsProps) => {
    const { tabs, value, onTabClick, className } = props;

    return (
        <div className={classNames(classes.container, {}, [className])}>
            {tabs.map(item => (
                <Card
                    key={item.value}
                    className={classNames(
                        classes.tab,
                        {
                            [classes.activeTab]: value === item.value,
                        },
                        []
                    )}
                    onClick={() => onTabClick(item)}
                >
                    <Text text={item.content} />
                </Card>
            ))}
        </div>
    );
};

export default memo(Tabs);
