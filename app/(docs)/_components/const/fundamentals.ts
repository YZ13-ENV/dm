import { SideMap } from "@/types/docs";


export const fundamentals: SideMap = [
    {
        type: 'group',
        name: 'Начало работы',
        id: 'fundamentals',
        items: [
            {
                type: 'single',
                id: 'fundamentals/create-account',
                name: 'Создайте аккаунт',
                hasArrow: true
            },
        ]
    },
    {
        type: 'group',
        name: 'Проекты',
        id: 'fundamentals/projects',
        items: [
            {
                type: 'single',
                id: 'fundamentals/projects/dm',
                name: "DM",
                hasArrow: true
            },
            {
                type: 'single',
                id: 'fundamentals/projects/yz13',
                name: "YZ13",
                hasArrow: true
            },
            {
                type: 'single',
                id: 'fundamentals/projects/keeper',
                name: "Keeper",
                hasArrow: true
            },
            {
                type: 'single',
                id: 'fundamentals/projects/frame',
                name: "Frame (скоро)",
                hasArrow: true
            },

            {
                type: 'single',
                id: 'fundamentals/projects/calendar',
                name: "Calendar (скоро)",
                hasArrow: true
            },
        ]
    }
]