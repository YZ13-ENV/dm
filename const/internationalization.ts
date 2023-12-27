import { dm_family_host, notes_host, yz13_host } from "./host";

type HomeProject = {
    long?: string
    short: string
    link: string
}
type HomeInter = {
    home: {
        hero: {
            title: string
            description: string
        }
        projects: {
            title: string
            description: string
            items: HomeProject[]
        }
        posts: {
            title: string
            locale: string
        }
    }

}

export const internationalization: { [key: string]: HomeInter } = {
    "rus": {
        home: {
            hero: {
                title: 'Творчество и производительность',
                description: 'DM служит для расширения возможностей при работе, и поиске вдохновения, здесь вы можете построить свои планы и вдохновиться на новые проекты.'
            },
            projects: {
                title: 'Вы можете опробовать мои проекты',
                description: 'Вы можете опробовать приложения и без аккаунта DM Family, но для лучшего пользовательского опыта, рекомендую воспользоваться аккаунтом DM Family, это быстро и работает для все приложений.',
                items: [
                    {
                        short: 'DM/YZ13',
                        link: yz13_host
                    },
                    {
                        short: 'DM Family',
                        long: 'DarkMaterial Family',
                        link: dm_family_host
                    },
                    {
                        short: 'DM/Заметки',
                        link: notes_host
                    }
                ]                
            },
            posts: {
                title: 'Сегодня',
                locale: 'ru'
            }
        }
    },
    "eng": {
        home: {
            hero: {
                title: 'Creativity and performance',
                description: 'DM serves to expand your work capabilities and find inspiration, here you can build your plans and be inspired for new projects'
            },
            projects: {
                title: 'You can try my projects',
                description: "You can try out the apps without a DM Family account, but for the best user experience, I recommend using a DM Family account, it's fast and works for all apps.",
                items: [
                    {
                        short: 'DM/YZ13',
                        link: yz13_host
                    },
                    {
                        short: 'DM Family',
                        long: 'DarkMaterial Family',
                        link: dm_family_host
                    },
                    {
                        short: 'DM/Заметки',
                        link: notes_host
                    }
                ]                
            },
            posts: {
                title: 'Today',
                locale: 'en'
            }
        }
    }
}