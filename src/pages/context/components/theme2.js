import React from 'react';
import {ThemeContext} from './theme-context';

class Theme2 extends React.Component {
    render() {
        let { theme, toggleTheme } = this.context;
        
        console.log(theme);
        return (
            <div className="theme2">
                <div style={{backgroundColor: theme.background, color: theme.foreground }}>主题颜色</div>
                <div onClick={toggleTheme}>切换主题颜色</div>
            </div>
        )
    }
}
Theme2.contextType = ThemeContext;

export default Theme2;