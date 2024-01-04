import DocsNav from "@/app/(docs)/_components/docs-nav"
import SideElement from "@/app/(docs)/_components/side/side-element"
import SideGroup from "@/app/(docs)/_components/side/side-group"
import Header from "@/components/widgets/headers/default"
import { docFinder } from "@/helpers/docFinder"
import { parseDocId } from "@/helpers/docs"

type Props = {
    children: JSX.Element | JSX.Element[]
    params: {
        id: string[]
    }
}
const layout = ({ children, params }: Props) => {
    const docId = params.id
    const parsedDocId = parseDocId(docId)
    const documentation = docFinder(parsedDocId.sideValue)
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Header transparent />
            </div>
            <DocsNav />
            <div className='max-w-7xl w-full min-h-screen mx-auto h-full flex items-start pt-6'>
                <aside className='px-6 shrink-0 w-64 h-full gap-4  flex flex-col'>
                    {
                        documentation && 
                        documentation.side.map((item, index) => {
                            if (item.type === 'group') return <SideGroup providedId={parsedDocId.sideValue} key={'group-' + index} group={item} />
                            if (item.type === 'single') return <SideElement key={'single-' + index} element={item} />
                            return null
                        })
                    }
                </aside>
                { children }
                <div className='w-64 shrink-0 lg:flex hidden h-full px-6'></div>
            </div>
            <footer className="py-12 border-t bg-card">

            </footer>
        </>
    )
}

export default layout