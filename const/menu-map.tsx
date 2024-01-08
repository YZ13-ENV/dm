import { BiCog } from 'react-icons/bi'
import { TiDocumentText } from "react-icons/ti";
import { MenuMapProps, projects } from 'ui'

export const menu: MenuMapProps = [
    {
        type: 'wrapper',
        items: [
            {
                type: 'user'
            },
            {
                type: 'links',
                items: [
                    {
                        link: '/docs',
                        icon: TiDocumentText,
                        text: 'Документация'
                    },
                    {
                        link: '/account',
                        icon: BiCog,
                        text: 'Настройки'
                    }
                ]
            }
        ]
    },
    {
        type: 'wrapper',
        className: 'h-fit w-full mt-auto',
        items: [
            {
                type: 'projects',
                projects: projects
            },
            {
                type: 'sign-out'
            }
        ]
    }

]