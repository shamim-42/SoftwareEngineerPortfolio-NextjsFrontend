import { createContext, useState } from 'react';

import { theDarkTheme, theLightTheme } from '../src/theme/theme';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(theLightTheme);
    const [isDark, setDark] = useState(false);

    const changeTheme = () => {
        if (isDark) {
            setTheme(theLightTheme);
            setDark(false);
        } else {
            setTheme(theDarkTheme);
            setDark(true);
        }
    }

    const value = { theme, changeTheme, isDark }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider