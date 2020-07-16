import React from 'react';

export const themes = {
    light: {
        foreground: '#222222',
        background: '#ffffff',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    {
        theme: themes.dark,
        toggleTheme: () => {
            console.log(this);
        }
    }
);