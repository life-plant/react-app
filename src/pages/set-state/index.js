
import React from 'react';
import './index.scss';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qustion: {
                title: 'aaa',
                dialog: [
                    {
                        type: 1,
                        ask: 'zzzz',
                    }, {
                        type: 2,
                        answer: 'yyyy',
                    }
                ]
            }
        }
    }
    
    render() {
        return ( 
            <div className = "index" >
                列表 
            </div>
        );
    }
}

export default Index;