import React from 'react';
import {ThemeContext} from './theme-context';

class Theme2 extends React.Component {
    render() {
        let { theme, toggleTheme } = this.context;
        
        console.log(theme);
        return (
            <div className="theme2">
                ------------theme2组件start----------
                <div style={{backgroundColor: theme.background, color: theme.foreground }}>主题颜色</div>
                <div className="btn" onClick={toggleTheme}>切换主题颜色</div>
                <br></br>
                ------------theme2组件end-------------
            </div>
        )
    }
}
Theme2.contextType = ThemeContext;

export default Theme2;