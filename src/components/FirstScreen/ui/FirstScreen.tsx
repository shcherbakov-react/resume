import cls from './FirstScreen.module.scss'
import {useTranslation} from "react-i18next";

export const FirstScreen = () => {
    const {t} = useTranslation()
    return (
        <div className={`${cls.screen} container`}>
            <div className={cls.content}>
                <span className={cls.span}>{t("hello")}</span>
                <h1 className={cls.title}>{t("main_description")}<span className={cls.accent}> 4&nbsp;{t("years")}</span></h1>
            </div>
        </div>
    )
}
