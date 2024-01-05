import DocsNav from "@/app/(docs)/_components/docs-nav"
import Side from "@/app/(docs)/_components/side"
import Header from "@/components/widgets/headers/default"

type Props = {
    children: JSX.Element | JSX.Element[]
    params: {
        id: string[]
    }
}
const layout = ({ children, params }: Props) => {
    const docId = params.id
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Header transparent />
            </div>
            <DocsNav />
            <div className='max-w-7xl w-full min-h-screen mx-auto h-full flex items-start py-6'>
                <Side docId={docId} />
                { children }
                <div className='w-64 shrink-0 lg:flex hidden h-full px-6'></div>
            </div>
            <footer className="py-12 border-t bg-card">

            </footer>
        </>
    )
}

export default layout