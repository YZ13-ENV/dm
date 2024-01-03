import SideElement from "@/app/(docs)/_components/side/side-element"
import SideGroup from "@/app/(docs)/_components/side/side-group"
import Header from "@/components/widgets/headers/default"
import { docFinder } from "@/helpers/docFinder"
import Link from "next/link"


type Props = {
    children: JSX.Element | JSX.Element[]
    params: {
        id: string
    }
}
const layout = ({ children, params }: Props) => {
    const docId = params.id
    const documentation = docFinder(docId)
    if (!documentation) return null
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Header transparent />
            </div>
            <nav className='max-w-7xl w-full mx-auto h-full flex items-center gap-4 px-6 py-2'>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>Основы</Link>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>База данных</Link>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>Библиотеки</Link>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>API</Link>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>Все</Link>
            </nav>
            <div className='max-w-7xl w-full mx-auto h-full flex items-start pt-6'>
                <aside className='px-6 shrink-0 w-64 h-full gap-4  flex flex-col'>
                    {
                        documentation.side.map((item, index) => {
                            if (item.type === 'group') return <SideGroup key={'group-' + index} group={item} />
                            if (item.type === 'single') return <SideElement key={'single-' + index} element={item} />
                            return null
                        })
                    }
                </aside>
                { children }
                <div className='w-64 shrink-0 h-full px-6'></div>
            </div>
        </>
    )
}

export default layout