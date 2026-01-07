import {NAVIGATION} from "../../../utils/const/navigation.ts";
import {useTranslation} from "react-i18next";
import cls from './Navigator.module.scss'

export const Navigator = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.block}>
            {NAVIGATION.map((item) => (
                <div className={`${cls.item} ${item.key === 'contacts' && cls.accent}`} key={item.key}>{t(item.key)}</div>
            ))}
        </div>
    )
}
