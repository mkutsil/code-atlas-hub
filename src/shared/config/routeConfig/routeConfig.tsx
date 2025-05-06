import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRouters { 
	HOME = 'home',
	ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.PROFILE]: '/profile',
    [AppRouters.NOT_FOUND]: '*'
};

export const routerConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.HOME] : {
        path: RoutePath.home,
        element: <HomePage/>
    },
    [AppRouters.ABOUT] : {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRouters.PROFILE] : { 
        path: RoutePath.profile,
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRouters.NOT_FOUND] : { 
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },

};