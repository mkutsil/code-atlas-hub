import { classNames } from 'shared/lib/classNames/classNames';
import classes from './DropdownMenu.module.scss';
import { useState, ReactElement, useRef, useEffect } from 'react';

type dropdownMenuConfigType = {
    label: string;
    action: () => void;
}

interface DropdownMenuProps {
    dropdownMenuConfig: dropdownMenuConfigType[];
    className?: string;
    children: ReactElement;
}
 
const DropdownMenu  = (props : DropdownMenuProps) => {
    const { 
        dropdownMenuConfig,
        className, 
        children,
        ...otherProps
    } = props;
    const menuRef = useRef<HTMLDivElement>(null);
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return ( 
        <div 
            className={classNames(classes.dropdown, {}, [ className ])} 
            {...otherProps}
            ref={menuRef}
        >
            <div
                style={{ cursor: 'pointer', width: 'max-content', height: 'max-content' }}
                onClick={toggleDropdown}
            >
                {children}
            </div>

            {isOpen && (
                <div className={classes.dropdownMenu}>
                    {dropdownMenuConfig.map((item, index) => (
                        <div 
                            key={index} 
                            className={classes.dropdownMenuItem}
                            onClick={item.action}
                        >
                            <span>{item.label}</span>
                        </div>
                    )
                    )}
                </div>
            )}
            
        </div>
    );
};
 
export default DropdownMenu;