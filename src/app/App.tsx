import { AppRouter } from 'app/providers/router';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch';
import {  userActions } from 'entities/User';

const App = () => {
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [ dispatch ]);
    
    return (
        <div className={classNames('app')}>
            <Suspense fallback={<PageLoader/>}>
                <Sidebar/>
                <div className="content-page">
                    <Navbar/>
                    <div className='page-wrapper'>
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>	
        </div>
    );
};

export default App;