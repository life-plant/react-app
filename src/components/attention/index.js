import React from 'react';
import './index.scss';

class Attention extends React.Component {
    render() {
        return this.props.isOpen ? (
            <div className="attention-mask">
                <div className="attention-content" style={{width: this.props.width || "80%"}}>
                    {this.props.children}
                    <div className="attention-btn" onClick={this.props.closeHandle}>确定</div>
                </div>
            </div>
        ) : null;
    }
}

export default Attention;