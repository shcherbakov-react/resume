import cls from './Header.module.scss'
import {AvatarBlock} from "../../../AvatarBlock";
import {LanguageSwitcher} from "../../LanguageSwitcher";

export const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.wrap}>
                <div className="progressive-blur-container">
                    <div className="blur-filter"></div>
                    <div className="blur-filter"></div>
                    <div className="blur-filter"></div>
                    <div className="blur-filter"></div>
                    <div className="blur-filter"></div>
                    <div className="blur-filter"></div>
                    <div className="blur-filter"></div>
                    <div className="gradient"></div>
                </div>
                <AvatarBlock/>
                <LanguageSwitcher/>
            </div>
        </header>
    )
}