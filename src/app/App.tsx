import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';

const App = () => (
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

export default App;