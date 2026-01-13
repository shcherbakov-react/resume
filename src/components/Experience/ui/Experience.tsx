import {experienceData} from "../../../utils/const/experience.ts";
import cls from './Experience.module.scss';
import {ExperienceItem} from "./ExperienceItem.tsx";

export const Experience = () => {
    return (
        <div className="container">
            <div className={cls.items}>
                {experienceData.map((item) => (
                    <ExperienceItem key={item.company.name} {...item} />
                ))}
            </div>
        </div>
    )
}
