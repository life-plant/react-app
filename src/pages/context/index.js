
import React from 'react';
import {ThemeContext, themes} from './components/theme-context';
import Theme1 from './components/theme1';
import './index.scss';



class themePage extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme,
        }
    }
    toggleTheme() {
        this.setState(state => ({
          theme:
            state.theme === themes.dark
              ? themes.light
              : themes.dark,
        }));
    };
    render() {
        return (
            <ThemeContext.Provider
                value={this.state}
            >
                <Theme1></Theme1>
            </ThemeContext.Provider>
            // <div>
            //      {/* 使用默认值 */}
            //     <Theme1></Theme1>
            // </div>
        )
    }
}

export default themePage;