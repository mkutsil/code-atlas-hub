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

export enum TextMaxLines {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    size?: TextSize;
    align?: TextAlign;
    titleAlign?: TextAlign;
    titleMarginBottom?: boolean;
    titleMaxLines?: TextMaxLines;
    textMaxLines?: TextMaxLines;
}

const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        size = TextSize.S,
        align = TextAlign.LEFT,
        titleAlign = align,
        titleMarginBottom = true,
        titleMaxLines = undefined,
        textMaxLines = undefined,
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

        [classes.titleMarginBottom]: titleMarginBottom,

        [classes.clamp1]: titleMaxLines === TextMaxLines.ONE,
        [classes.clamp2]: titleMaxLines === TextMaxLines.TWO,
        [classes.clamp3]: titleMaxLines === TextMaxLines.THREE,
        [classes.clamp4]: titleMaxLines === TextMaxLines.FOUR,
        [classes.clamp5]: titleMaxLines === TextMaxLines.FIVE,
        [classes.clamp6]: titleMaxLines === TextMaxLines.SIX,
    };

    const textMods: Record<string, boolean> = {
        [classes.clamp1]: textMaxLines === TextMaxLines.ONE,
        [classes.clamp2]: textMaxLines === TextMaxLines.TWO,
        [classes.clamp3]: textMaxLines === TextMaxLines.THREE,
        [classes.clamp4]: textMaxLines === TextMaxLines.FOUR,
        [classes.clamp5]: textMaxLines === TextMaxLines.FIVE,
        [classes.clamp6]: textMaxLines === TextMaxLines.SIX,
    };

    return (
        <div className={classNames(classes.textContainer, mods, [className])}>
            {title && <p className={classNames(classes.title, titleMods, [])}>{title}</p>}
            {text && <p className={classNames(classes.text, textMods, [])}>{text}</p>}
        </div>
    );
};

export default memo(Text);
