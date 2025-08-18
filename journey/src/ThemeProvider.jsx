import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme((prev) => prev == 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === 'light' ? 'light' : 'dark'}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;