import { DocumentMap } from "@/types/docs";
import { fundamental_map } from './fundamental-map'

export const maps: DocumentMap[] = [
    fundamental_map
]

export const objMap = maps
.map(item => ({ [item.id]: item }))
.reduce((a, b) => ({
        ...a,
        ...b
    })
)