import React from "react";
import { findDOMNode } from 'react-dom'
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
    componentDidMount() {
        //不建议这样获取ref
        console.log(this.refs.targetR);
        // 返回具体的原生DOM节点
        console.log(findDOMNode(this.refs.targetR))
    }
    render() {
        return (
            <div className="ref-com">
                <div className="btn" onClick={() => {this.printRef()}}>input-console</div>
                <div className="btn" onClick={() => {this.printRefCom()}}>com-console</div>
                <RefTarget ref={this.ref}></RefTarget>
                <RefTarget2 onRef={this.onRef} ref="targetR"></RefTarget2>
            </div>
        )
    }
}

export default RefCom;