import cls from './Experience.module.scss'

interface ExperienceItemProps {
        name: string;
        years: string;
        dates: string;
        experiences: string[];
}

export const ExperienceItem = (props: ExperienceItemProps) => {
    const {name, years} = props;
    return (
        <div className={cls.wrapper}>
            <div>{name}</div>
            <div>{years}</div>
        </div>
    )
}
