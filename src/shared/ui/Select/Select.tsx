import { useRef, useState } from 'react';
import classes from './Select.module.scss';
import { ChevronDown } from 'lucide-react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useClickOutside } from 'shared/lib/hooks/useClickOutside/useClickOutside';
import Text, { TextMaxLines } from 'shared/ui/Text/Text';

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    options: Option[];
    value?: string | null;
    onChange: (value: string) => void;
    placeholder?: string;
}

const Select = (props: SelectProps) => {
    const { options, value, onChange, placeholder } = props;

    const ref = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);

    const selectedLabel = options?.find(opt => opt.value === value)?.label;

    const arrowMods: Mods = {
        [classes.arrowTop]: isOpen,
    };

    const labelMods: Mods = {
        [classes.isArrowActive]: isOpen || selectedLabel,
    };

    const selectMods: Mods = {
        [classes.isSelectActive]: isOpen,
    };

    useClickOutside(ref, () => setIsOpen(false));

    return (
        <div className={classes.wrapper} ref={ref}>
            <Text
                text={placeholder}
                textMaxLines={TextMaxLines.ONE}
                className={classNames(classes.placeholder, labelMods)}
            />

            <div
                className={classNames(classes.select, selectMods)}
                onClick={() => setIsOpen(prev => !prev)}
            >
                {selectedLabel ? (
                    <Text
                        className={classes.label}
                        text={selectedLabel}
                        textMaxLines={TextMaxLines.ONE}
                    />
                ) : (
                    <div />
                )}

                <span className={classNames(classes.arrow, arrowMods)}>
                    <ChevronDown />
                </span>
            </div>

            {isOpen && (
                <ul className={classes.dropdown} data-testid="select-dropdown">
                    {options?.map(option => (
                        <li
                            key={option.value}
                            className={classNames(classes.option, {
                                [classes.active]: option.value === value,
                            })}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            data-testid={`select-option-${option.value}`}
                        >
                            <Text
                                className={classes.optionText}
                                text={option.label}
                                textMaxLines={TextMaxLines.ONE}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
