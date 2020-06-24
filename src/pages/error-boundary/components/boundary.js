import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        console.log('xxx')
        return { hasError: true };
    }
    render() {
        console.log(this.state.hasError);
        if (this.state.hasError) {
            return (
                <div>something wrong</div>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;