import { 
    LOCAL_STORAGE_THEME_KEY, 
    Theme, 
    ThemeContext 
} from 'app/providers/ThemeProvider/lib/ThemeContext';
import { FC, ReactNode, useState } from 'react';

interface ThemeProviderProps  {
	children: ReactNode;
    initialTheme?: Theme;
} 

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {

    const [ theme, setTheme ] = useState<Theme>(initialTheme || defaultTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}; 

export default ThemeProvider;