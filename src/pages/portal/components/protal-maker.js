import React from "react";
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('app-root');

class protalMaker extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        appRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        appRoot.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}

export default protalMaker;