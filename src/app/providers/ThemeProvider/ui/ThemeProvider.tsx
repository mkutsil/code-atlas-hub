import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { FC, ReactNode, useState } from 'react'

interface ThemeProviderProps  {
	children: ReactNode;
} 

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    return (
        <ThemeContext.Provider value={{theme, setTheme: setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
} 

export default ThemeProvider;