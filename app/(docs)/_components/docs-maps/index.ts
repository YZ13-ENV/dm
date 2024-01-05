import { DocumentMap } from "@/types/docs";
import { 
    fundamental_map, 
    fundamental_projects_map, 
    fundamental_projects_dm_map, 
    fundamental_projects_yz13_map
} from './fundamental-map'
import { 
    api_map, 
    api_rest_api_endpoints_map
} from "./api-map";

export const maps: DocumentMap[] = [
    fundamental_map,
    fundamental_projects_map,
    fundamental_projects_dm_map,
    fundamental_projects_yz13_map,
    api_map,
    api_rest_api_endpoints_map
]