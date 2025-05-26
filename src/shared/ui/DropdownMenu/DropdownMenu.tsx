import { classNames } from 'shared/lib/classNames/classNames';
import classes from './DropdownMenu.module.scss';
import { useState, ReactElement, useRef } from 'react';
import { useClickOutside } from 'shared/lib/hooks/useClickOutside/useClickOutside';

type dropdownMenuConfigType = {
    label: string;
    action: () => void;
};

interface DropdownMenuProps {
    dropdownMenuConfig: dropdownMenuConfigType[];
    className?: string;
    children: ReactElement;
}

const DropdownMenu = (props: DropdownMenuProps) => {
    const { dropdownMenuConfig, className, children, ...otherProps } = props;
    const menuRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    useClickOutside(menuRef, () => setIsOpen(false));

    return (
        <div
            className={classNames(classes.dropdown, {}, [className])}
            {...otherProps}
            ref={menuRef}
        >
            <div
                style={{
                    cursor: 'pointer',
                    width: 'max-content',
                    height: 'max-content',
                }}
                onClick={toggleDropdown}
            >
                {children}
            </div>

            {isOpen && (
                <div className={classes.dropdownMenu}>
                    {dropdownMenuConfig.map((item, index) => (
                        <div key={index} className={classes.dropdownMenuItem} onClick={item.action}>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
