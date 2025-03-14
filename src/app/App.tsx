import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import './styles/index.scss';

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