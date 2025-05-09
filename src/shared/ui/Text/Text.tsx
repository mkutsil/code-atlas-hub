import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

export enum TextSize {
    XS = 'textSizeXs',
    S = 'textSizeS',
    M = 'textSizeM',
    L = 'textSizeL',
}

export enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
}

interface TextProps {
	className? : string;
    title?: string;
    text?: string;
    size?: TextSize;
    align?: TextAlign;
    titleAlign?: TextAlign;
}
 
const Text = (props: TextProps) => {

    const { 
        className, 
        title, 
        text, 
        size = TextSize.S, 
        align = TextAlign.LEFT, 
        titleAlign = align 
    } = props;

    const mods: Record<string, boolean> = {
        [classes.textSizeXs]: size === TextSize.XS,
        [classes.textSizeS]: size === TextSize.S,
        [classes.textSizeM]: size === TextSize.M,
        [classes.textSizeL]: size === TextSize.L,
        [classes.textAlignCenter]: align === TextAlign.CENTER,
        [classes.textAlignLeft]: align === TextAlign.LEFT,
        [classes.textAlignRight]: align === TextAlign.RIGHT,
        
    };

    const titleMods: Record<string, boolean> = {
        [classes.titleAlignCenter]: titleAlign === TextAlign.CENTER,
        [classes.titleAlignLeft]: titleAlign === TextAlign.LEFT,
        [classes.titleAlignRight]: titleAlign === TextAlign.RIGHT,
    };

    return (  
        <div 
            className={classNames(classes.textContainer, mods, [ className ])}
        >
            {title && <p className={classNames(classes.title, titleMods, [])}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
};
 
export default memo(Text);