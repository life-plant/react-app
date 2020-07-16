import React from 'react';


class RefTarget2 extends React.Component {
  render() {
    return (
        <div className="index">
            RefCom
        </div>
    );
  }
  componentDidMount(){
    this.props.onRef(this)
  }
}


export default RefTarget2;
