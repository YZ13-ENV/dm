import { docFinder } from "@/helpers/docFinder"
import { parseDocId } from "@/helpers/docs"
import SideGroup from "./side/side-group"
import SideElement from "./side/side-element"

type Props = {
    docId: string[]
}
const Side = ({ docId }: Props) => {
    const parsedDocId = parseDocId(docId)
    const documentation = docFinder(parsedDocId.sideValue)
    return (
        <aside className='px-6 shrink-0 w-64 h-full gap-4 md:flex hidden flex-col'> 
            {
                documentation && 
                documentation.side.map((item, index) => {
                    if (item.type === 'group') return <SideGroup providedId={parsedDocId.sideValue} key={'group-' + index} group={item} />
                    if (item.type === 'single') return <SideElement key={'single-' + index} element={item} />
                    return null
                })
            }
        </aside>
    )
}

export default Side