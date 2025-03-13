import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import Button from 'shared/ui/Button/Button';

const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();
      
    return ( 
        <Button onClick={toggleTheme}><ThemeSwitcherIcon/></Button>
	 );
};
 
export default ThemeSwitcher;