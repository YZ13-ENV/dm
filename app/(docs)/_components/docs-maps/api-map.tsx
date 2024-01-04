import { DocumentMap } from "@/types/docs";
import { api } from "../const/api";
import ApiStart from "../blocks/api/api-start";
import ApiEndpoints from "../blocks/api/api-endpoints";



export const api_map: DocumentMap = {
    id: 'api/rest-api',
    root: true,
    name: 'API',
    blocks: [
        <ApiStart key='api-start' />
    ],
    side: api
}

export const api_rest_api_endpoints_map: DocumentMap = {
    id: 'api/rest-api/endpoints',
    name: 'REST API Endpoints',
    blocks: [
        <ApiEndpoints key='api-endpoints' />
    ],
    side: api
}