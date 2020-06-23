
import React from 'react';
import {ThemeContext, themes} from 'src/pages/theme/theme-context';
import Theme1 from 'src/components/theme/theme1';



class themePage extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
              theme:
                state.theme === themes.dark
                  ? themes.light
                  : themes.dark,
            }));
        };
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme,
        }
    }
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