import React from "react";
import RefTarget from "./components/ref-target";
import RefTarget2 from './components/ref-target2';

class RefCom extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    printRef() {
        console.log(this.ref);
    }
    printRefCom() {
        console.log(this.child);
    }
    onRef = (ref) => {
        console.log('aaa');
        this.child = ref;
    }
    render() {
        return (
            <div className="ref-com">
                
                <div onClick={() => {this.printRef()}}>input-console</div>
                <div onClick={() => {this.printRefCom()}}>com-console</div>
                <RefTarget ref={this.ref}></RefTarget>
                <RefTarget2 onRef={this.onRef}></RefTarget2>
            </div>
        )
    }
}

export default RefCom;