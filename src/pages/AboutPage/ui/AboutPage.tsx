import { useTranslation } from 'react-i18next';
import classes from './AboutPage.module.scss';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

const AboutPage = () => {
	
    const { t } = useTranslation();
	
    return (
        <div className={classes.aboutPage}>
            <h1>{t('title')}</h1>
            <p>
                {t('description.text')}
            </p>

            <span>{t('description.name')}</span>

            <div className={classes.card}>
                <span>{t('description.name')}</span>

            </div>

            <div className={classes.buttonContainer}>
                <Button theme={ThemeButton.OUTLINED}>Outlined</Button>
                <Button theme={ThemeButton.CONTAINED}>Outlined</Button>
            </div>
        </div>
    );
};

export default AboutPage;