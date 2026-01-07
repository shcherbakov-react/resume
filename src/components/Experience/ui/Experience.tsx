import {experienceData} from "../../../utils/const/experience.ts";
import {ExperienceItem} from "./ExperienceItem.tsx";

export const Experience = () => {
    return (
        <div className="container">
            {experienceData.map((item) => (
                <ExperienceItem key={item.name} {...item} />
            ))}
        </div>
    )
}
