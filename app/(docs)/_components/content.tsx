import { docFinder } from "@/helpers/docFinder"
import { parseDocId } from "@/helpers/docs"
import { BiChevronRight } from "react-icons/bi"

type Props = {
    docId: string[]
}
const Content = ({ docId }: Props) => {
    const parsedDocId = parseDocId(docId)
    const documentation = docFinder(parsedDocId.sideValue)
    const parsedValue = parsedDocId.sideValue.split('/')
    return (
        <section className='w-full h-full px-6 flex flex-col gap-6'>
            <div className="w-full h-fit flex items-center gap-2">
                {
                    parsedValue.map((value, index) => {
                        if (index === 0) return <span key={'nav-breadcrumb' + value} className="text-sm text-muted-foreground">{value.replaceAll('-', ' ')}</span>
                        return (
                            <>
                                <BiChevronRight className='text-muted-foreground' size={18} />
                                <span key={'nav-breadcrumb' + value} className="text-sm text-muted-foreground">{value.replaceAll('-', ' ')}</span>
                            </>
                        )
                    }
                    )
                }
            </div>
            { documentation && documentation.blocks }
        </section>
    )
}

export default Content