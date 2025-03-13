import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import LocalesIcon from 'shared/assets/icons/locales.svg';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
      
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
    };
       
    return ( 
        <Button onClick={toggleLanguage}><LocalesIcon/></Button>
	 );
};
 
export default LanguageSwitcher;