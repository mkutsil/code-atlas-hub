declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.svg' {
	import React from 'react';
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const IS_DEV: boolean;
declare const API_URL: string;

type OptionalRecord<K extends string, T> = {
	[P in K]?: T;
};
