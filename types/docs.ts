
export type SideElementProps = {
    type: 'single'
    name: string
    hasArrow?: boolean
}
export type SideGroupProps = {
    type: 'group'
    name: string
    items: SideElementProps[]
}
export type SideMap = (SideGroupProps | SideElementProps)[]


export type DocumentMap = {
    id: string
    side: SideMap
    blocks: JSX.Element[]
}