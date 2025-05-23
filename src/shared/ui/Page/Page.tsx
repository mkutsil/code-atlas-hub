import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Page.module.scss';
import { ReactNode, useRef } from 'react';
import useInfiniteScroll from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
	children: ReactNode;
	className?: string;
	onScrollEnd?: () => void;
}
 
const Page = (props : PageProps) => {
	
    const { children, className, onScrollEnd } = props;
	
    const wrapperRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return ( 
        <section 
            ref={wrapperRef}
            className={classNames(classes.container, {}, [ className ])}
        >
            {children}
            <div ref={triggerRef}/>
        </section>
	 );
};
 
export default Page;