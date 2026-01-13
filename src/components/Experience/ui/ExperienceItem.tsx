import cls from './Experience.module.scss'
import type {ResumeExperience} from "../../../utils/const/experience.ts";
import AboutIcon from '@/assets/images/about.svg?react'
import { Tooltip } from 'react-tooltip'

export const ExperienceItem = (data: ResumeExperience) => {

    return (
        <div className={cls.wrapper}>
            <div className={`${cls.flex} ${cls.company}`}>
                <img src={data.company.logo} alt="logo"/>
                <div>
                    <div>
                        <div className={`${cls.flex} ${cls.title}`}>
                            <h3 className={cls.name}>{data.company.name}</h3>
                            <div className={cls.about}>

                                <div data-tooltip-id="my-tooltip" data-tooltip-content={data.description}>
                                    <AboutIcon/>
                                </div>
                                <Tooltip id="my-tooltip" />
                            </div>
                        </div>
                        <div className={cls.flex}>
                            <div className={cls.info}>
                                {data.company.experience}
                            </div>
                            <div className={cls.info}>
                                {data.company.period.from} - {data.company.period.to}
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <ul className={cls.list}>
                {data.items.map((item, idx) => (
                    <li
                        key={idx}
                        dangerouslySetInnerHTML={{__html: item}}
                    />
                ))}
            </ul>
            <div className={cls.tags}>
                {data.tags.map(tag => (
                    <div
                        key={tag}
                        className={cls.tag}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}
