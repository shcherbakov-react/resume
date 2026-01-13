import cls from './AvatarBlock.module.scss'
import Image from '../../../assets/images/avatar.png'
import { useTranslation } from "react-i18next";

export const AvatarBlock = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.block}>
            <img className={cls.avatar} src={Image} alt="Avatar" />
            <div className={cls.info}>
                <div className={cls.initials}>{t("initials")}</div>
                <ul className="list-dotted">
                    <li>react</li>
                    <li>typescript</li>
                    <li>next.js</li>
                </ul>
            </div>
        </div>
    )
}
