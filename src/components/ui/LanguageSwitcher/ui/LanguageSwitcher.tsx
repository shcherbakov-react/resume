import {useTranslation} from "react-i18next";
import cls from './LanguageSwitcher.module.scss';

const languages = ["ru", "en"]

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    const handleChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className={cls.switcher}>
            {languages.map((language) => (
                <button key={language}
                        className={`${cls.switcherButton} ${i18n.language === language ? cls.active : ""}`}
                        onClick={() => handleChangeLanguage(language)}>{language}</button>
            ))}
        </div>
    );
}
