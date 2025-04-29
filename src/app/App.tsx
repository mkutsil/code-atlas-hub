import { AppRouter } from 'app/providers/router';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch';
import { getUserAuthData, userActions } from 'entities/User';
import { useSelector } from 'react-redux';
import { fetchUserData } from 'entities/User';

const App = () => {
    
    const dispatch = useAppDispatch();
    const userAuthData = useSelector(getUserAuthData);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [ dispatch ]);

    useEffect(() => {
        if(userAuthData) {
            dispatch(fetchUserData());
        }
    },[ dispatch, userAuthData ]);
    
    return (
        <div className={classNames('app')}>
            <Suspense fallback={<PageLoader/>}>
                <Sidebar/>
                <div className={'content-page'}>
                    <Navbar/>
                    <AppRouter/>
                </div>
            </Suspense>	
        </div>
    );
};

export default App;