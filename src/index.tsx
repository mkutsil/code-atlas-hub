import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render ( 
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
);