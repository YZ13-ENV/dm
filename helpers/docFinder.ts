import { DocumentMap } from "@/types/docs"
import { maps } from '@/app/(docs)/_components/docs-maps'

export const docFinder = (docId: string): DocumentMap | null => {
    const map = maps.find(map => map.id === docId)
    if (map) return map
    return null
}