import React from 'react';

// 组件
class RefTarget2 extends React.Component {
  render() {
    return (
        <div className="ref-target2">
            ref-target2
        </div>
    );
  }
  componentDidMount(){
    this.props.onRef(this)
  }
}


export default RefTarget2;
