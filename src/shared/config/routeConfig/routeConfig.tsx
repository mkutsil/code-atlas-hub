import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
 
export enum AppRouters { 
	HOME = 'home',
	ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.NOT_FOUND]: '*'
};

export const routerConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.HOME] : {
        path: RoutePath.home,
        element: <HomePage/>
    },
    [AppRouters.ABOUT] : {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRouters.NOT_FOUND] : { 
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
};