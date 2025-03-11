import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { RouteProps } from 'react-router-dom'

export enum AppRouters { 
	HOME = 'home',
	ABOUT = 'about',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: '/',
    [AppRouters.ABOUT]: '/about'
}

export const routerConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.HOME] : {
        path: RoutePath.home,
        element: <HomePage/>
    },
    [AppRouters.ABOUT] : {
        path: RoutePath.about,
        element: <AboutPage/>
    }
}