import { docFinder } from "@/helpers/docFinder"
import { parseDocId } from "@/helpers/docs"

type Props = {
    params: {
        id: string[]
    }
}
const page = ({ params }: Props) => {
    const docId = params.id
    const parsedDocId = parseDocId(docId)
    const documentation = docFinder(parsedDocId.root)
    return (
        <section className='w-full h-full px-6 flex flex-col gap-6'>
            { documentation && documentation.blocks }
            {/* <pre>{ JSON.stringify(parsedDocId, null, 2) }</pre> */}
            {/* <pre>{ JSON.stringify(objMap, null, 2) }</pre> */}
        </section>
    )
}

export default page