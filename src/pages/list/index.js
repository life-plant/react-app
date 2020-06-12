
import React from 'react';
import './index.scss';

class Index extends React.Component {
    render() {
        return ( 
            <div className = "index" >
                列表 
            </div>
        );
    }
    componentDidMount() {
        console.log(this);
    }
}

export default Index;