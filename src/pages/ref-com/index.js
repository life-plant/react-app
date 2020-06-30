import React from "react";
import RefTarget from "./components/ref-target";

class RefCom extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    printRef() {
        console.log(this.ref);
    }
    render() {
        return (
            <div className="ref-com">
                <RefTarget ref={this.ref}></RefTarget>
                <div onClick={() => {this.printRef()}}>console.log ref</div>
            </div>
        )
    }
}

export default RefCom;