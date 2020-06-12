import React from 'react';
import './index.scss';

class Attention extends React.Component {
    render() {
        return this.props.isOpen ? (
            <div className="attention-mask">
                <div className="attention-content">
                    {this.props.children}
                </div>
            </div>
        ) : null;
    }
}

export default Attention;