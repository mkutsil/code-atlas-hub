import { getUserAuthData } from 'entities/User';
import {  JSX, memo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const isAuth = useSelector(getUserAuthData);
    
    if(!isAuth) {
        return <Navigate to={RoutePath.home} />;   
    }

    return children;
};

export default memo(RequireAuth);