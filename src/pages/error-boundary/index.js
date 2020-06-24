import React from 'react';
import ErrorBoundary from "./components/boundary";
import Component1 from "./components/error-component";

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