import cls from './Header.module.scss'
import {AvatarBlock} from "../../../AvatarBlock";
import {LanguageSwitcher} from "../../LanguageSwitcher";

export const Header = () => {
    return (
        <header className={cls.header}>
            <AvatarBlock />
            <LanguageSwitcher />
        </header>
    )
}
