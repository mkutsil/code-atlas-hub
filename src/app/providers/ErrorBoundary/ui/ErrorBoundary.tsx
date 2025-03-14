import type { ErrorInfo, ReactNode  } from 'react';
import { Component, Suspense } from 'react';
import { PageError } from 'widgets/PageError';
import { PageLoader } from 'widgets/PageLoader';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = { hasError: boolean };

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error, errorInfo);
    }

    renderFallbackUI() {
        return (
            <Suspense fallback={<PageLoader/>}>
                <PageError/>
            </Suspense>
        );
    }

    render() {
        if (this.state.hasError) {
            return this.renderFallbackUI();
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

