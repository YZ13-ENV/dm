import { DocumentMap } from "@/types/docs";
import { api } from "../const/api";
import ApiStart from "../blocks/api/api-start";



export const api_map: DocumentMap = {
    id: 'api',
    root: true,
    name: 'API',
    blocks: [
        <ApiStart key='api-start' />
    ],
    side: api
}