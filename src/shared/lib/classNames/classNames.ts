type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter(([ , value ]) => Boolean(value)).map(([ className ]) => className)
].join(' ');