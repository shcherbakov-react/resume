import BackImage from "@/assets/images/folder/back.svg?react";
import FrontImage from "@/assets/images/folder/front.svg?react";
import cls from './Projects.module.scss';
export const ProjectsCard = () => {
    return (
        <div className={cls.projectCard}>
            <BackImage className={cls.backImage} />
            <FrontImage className={cls.frontImage} />
        </div>
    )
}
