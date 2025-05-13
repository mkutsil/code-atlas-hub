import {  Newspaper, House, Book } from 'lucide-react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.about,
        text: 'About',
        Icon: Book,
        authOnly: false,
    },
    {
        path: RoutePath.home,
        text: 'Home',
        Icon: House,
        authOnly: false,
    },
    {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: Newspaper,
        authOnly: true,
    },
];