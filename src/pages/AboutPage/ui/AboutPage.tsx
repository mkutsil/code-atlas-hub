import { useTranslation } from 'react-i18next';

// TODO create translation toggle component in widgets

const AboutPage = () => {
	
    const {t, i18n} = useTranslation();
  
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
    };
	
    return (
        <>
            <h1 onClick={toggleLanguage}>{t('title')}</h1>
            <p>
                {t('description.text')}
            </p>

            <span>{t('description.name')}</span>
        </>
    );
};

export default AboutPage;