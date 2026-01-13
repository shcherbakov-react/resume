export type ResumeCompany = {
    name: string
    logo: string
    period: {
        from: string
        to: string
    }
    experience: string
}

export type ResumeExperience = {
    company: ResumeCompany
    description: string
    items: string[]
    tags: string[]
}
export const experienceData: ResumeExperience[] = [{
    "company": {
        "name": "ГЛТ Технолоджи",
        "logo": "/src/assets/images/glt.svg",
        "period": {
            "from": "май 2024",
            "to": "настоящее время"
        },
        "experience": "1 год 8 месяцев"
    },
    "description": "Компания занимается разработкой и сопровождением IT-инфраструктуры для бизнеса в сфере транспортной логистики.",
    "items": [
        "Разработал внутренний сервис на <b>React</b> для приёма и обработки документов от водителей. Реализовал формы и интеграцию с API, что позволило перевести документооборот в цифровой формат и обрабатывать более <b>60%</b> всего объёма документов\n" + " <a href=\"https://docsbox.glt.company\" target=\"_blank\">docsbox.glt.company</a>",
        "Разработал frontend TMS-системы на <b>React</b>. Спроектировал структуру приложения, реализовал модули управления организациями, транспортом, водителями и сделками, участие в аукционах и интеграцию с <b>API</b>, довёл продукт до <b>MVP</b> и запуска",
        "Проектировал и руководил разработкой мобильного приложения на <b>React Native</b> для логистов и водителей. Реализовал интеграцию с backend и <b>1С</b>, <b>push-уведомления</b> и ключевые сценарии рейсов и заявок на пересменку и ремонт. Спроектировал и внедрил <b>offline-first</b> архитектуру с <b>WatermelonDB</b> и синхронизацией данных при восстановлении сети. <a href=\"https://play.google.com/store/apps/details?id=ru.glt.driver&hl=ru\" target=\"_blank\">Google Play</a>",
        "Обновил корпоративный сайт компании на <b>Next.js</b> с нуля по макетам из <b>Figma</b>. Внедрил новую дизайн-систему, реализовал <b>SSR</b>, динамическую маршрутизацию, <b>lazy loading</b> изображений и <b>SEO</b>-оптимизацию, интегрировав frontend с backend на <b>Wagtail</b>. <a href=\"https://glt.company\" target=\"_blank\">glt.company</a>",
        "Инициировал и внедрил общие стандарты качества кода в проектах. Спроектировал единый конфиг <b>ESLint</b> и <b>Prettier</b>, настроил <b>pre-commit</b> хуки и интеграцию <b>Sentry</b>, что снизило количество ошибок и ускорило релизы."
    ],
    "tags": [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "Vite",
        "React Query",
        "Feature-Sliced Design",
    ]
},
    {
        "company": {
            "name": "Nelset",
            "logo": "/src/assets/images/nelset.svg",
            "period": {
                "from": "Июнь 2021",
                "to": "Май 2024"
            },
            "experience": "3 года"
        },
        "description": "Компания занимается разработкой и сопровождением IT-инфраструктуры для бизнеса в сфере транспортной логистики.",
        "items": [
            "Разработал внутренний сервис на <b>React</b> для приёма и обработки документов от водителей. Реализовал формы и интеграцию с API, что позволило перевести документооборот в цифровой формат и обрабатывать более <b>60%</b> всего объёма документов\n" + " <a href=\"https://docsbox.glt.company\" target=\"_blank\">docsbox.glt.company</a>",
            "Разработал frontend TMS-системы на <b>React</b>. Спроектировал структуру приложения, реализовал модули управления организациями, транспортом, водителями и сделками, участие в аукционах и интеграцию с <b>API</b>, довёл продукт до <b>MVP</b> и запуска",
            "Проектировал и руководил разработкой мобильного приложения на <b>React Native</b> для логистов и водителей. Реализовал интеграцию с backend и <b>1С</b>, <b>push-уведомления</b> и ключевые сценарии рейсов и заявок на пересменку и ремонт. Спроектировал и внедрил <b>offline-first</b> архитектуру с <b>WatermelonDB</b> и синхронизацией данных при восстановлении сети. <a href=\"https://play.google.com/store/apps/details?id=ru.glt.driver&hl=ru\" target=\"_blank\">Google Play</a>",
            "Обновил корпоративный сайт компании на <b>Next.js</b> с нуля по макетам из <b>Figma</b>. Внедрил новую дизайн-систему, реализовал <b>SSR</b>, динамическую маршрутизацию, <b>lazy loading</b> изображений и <b>SEO</b>-оптимизацию, интегрировав frontend с backend на <b>Wagtail</b>. <a href=\"https://glt.company\" target=\"_blank\">glt.company</a>",
            "Инициировал и внедрил общие стандарты качества кода в проектах. Спроектировал единый конфиг <b>ESLint</b> и <b>Prettier</b>, настроил <b>pre-commit</b> хуки и интеграцию <b>Sentry</b>, что снизило количество ошибок и ускорило релизы."
        ],
        "tags": [
            "React",
            "React Native",
            "Next.js",
            "TypeScript",
            "Vite",
            "React Query",
            "Feature-Sliced Design",
        ]
    }]