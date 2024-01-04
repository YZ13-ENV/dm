import { SideMap } from "@/types/docs";
export const api: SideMap = [
    {
        type: 'single',
        id: 'api',
        name: 'API',
        hasArrow: true
    },
    {
        type: 'group',
        id: 'api/endpoints',
        name: 'Endpoints',
        items: [
            {
                type: 'single',
                id: 'api/endpoints/user',
                name: '/user'
            },
            {
                type: 'single',
                id: 'api/endpoints/notes',
                name: '/notes'
            }
        ]
    }
]