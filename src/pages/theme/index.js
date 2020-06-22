
import React from 'react';
import Theme1 from 'src/components/theme/theme1';

const themeContext = React.createContext('light');


class themePage extends React.Component {
    render() {
        return (
            <themeContext.Provider
                value="#ccc"
            >
                <Theme1></Theme1>
            
            </themeContext.Provider>
        )
    }
}

export default themePage;