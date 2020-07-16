import React from 'react';
import Theme2 from './theme2';

class Theme1 extends React.Component {
    render() {
        return (
            <div>
                theme1组件start
                <Theme2></Theme2>
                theme1组件end
            </div>
        )
    }
}

export default Theme1;