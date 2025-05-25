import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Page.module.scss';
import { ReactNode, useRef, UIEvent, useEffect } from 'react';
import useInfiniteScroll from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { scrollSaveActions } from 'widgets/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSaveScroll, getSaveScrollByPath } from 'widgets/ScrollSave/module/selectors/scrollSave';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
    children: ReactNode;
    className?: string;
    onScrollEnd?: () => void;
}

const Page = (props: PageProps) => {
    const { children, className, onScrollEnd } = props;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const wrapperRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const scrollPosition = useSelector((state: StateSchema) =>
        getSaveScrollByPath(state, pathname)
    );

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            })
        );
    }, 1000);

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = scrollPosition;
        }
    }, [scrollPosition]);

    return (
        <section
            ref={wrapperRef}
            className={classNames(classes.container, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};

export default Page;
