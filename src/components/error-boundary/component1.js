import React from 'react';

class Component1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errr: 'zzz'
        }
    }
    render() {
        return (<div>{this.state.errr.a.b}</div>)
    }
}

export default Component1;