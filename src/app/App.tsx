import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { PageLoader } from 'widgets/PageLoader';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [ theme ])}>
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