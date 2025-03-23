import { useState, useRef, FC, ReactNode, MouseEvent, useEffect, useCallback } from 'react';
import classes from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from '../Portal/Portal';

interface ModalProps {
	children?: ReactNode
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 300;
 
const Modal: FC<ModalProps> = ({ children, isOpen = false, onClose }) => {
	
    const [ isClosing, setIsClosing ] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing

    };

    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [ onClose ]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    }; 
    
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape'){
            closeHandler();
        }
    }, [ closeHandler ]); 
    
    useEffect(() => {

        if(isOpen){
            window.addEventListener('keydown', onKeyDown);
        }
        
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            window.removeEventListener('keydown', onKeyDown);
        };
        
    }, [ isOpen, onKeyDown ]);
	
    return ( 
        <Portal>
            <div className={classNames(classes.modal, mods)}>
                <div 
                    className={classes.overlay}
                    onClick={closeHandler}
                >
                    <div 
                        className={classes.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
	 );
};
 
export default Modal;