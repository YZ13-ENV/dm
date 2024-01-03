
export type SideElementProps = {
    type: 'single'
    id: string
    name: string
    hasArrow?: boolean
}
export type SideGroupProps = {
    type: 'group'
    id: string
    name: string
    items: SideElementProps[]
}
export type SideMap = (SideGroupProps | SideElementProps)[]


export type DocumentMap = {
    id: string
    side: SideMap
    blocks: JSX.Element[]
}