import { RefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
    triggerRef: RefObject<HTMLElement | null>;
    wrapperRef: RefObject<HTMLElement | null>;
    callback?: () => void;
}

const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
    const { callback, triggerRef, wrapperRef } = props;

    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback?.();
                }
            }, options);

            if (triggerElement) {
                observer.observe(triggerElement);
            }
        }

        return () => {
            if (observer && triggerElement) {
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};

export default useInfiniteScroll;
