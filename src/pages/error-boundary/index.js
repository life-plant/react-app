import React from 'react';
import ErrorBoundary from "src/components/error-boundary";
import Component1 from "src/components/error-boundary/component1";

class errorBoundary extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <Component1>
                </Component1>
            </ErrorBoundary>
        )
    }
}

export default errorBoundary;