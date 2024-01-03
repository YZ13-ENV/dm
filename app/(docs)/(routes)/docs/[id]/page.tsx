import { docFinder } from "@/helpers/docFinder"

type Props = {
    params: {
        id: string
    }
}
const page = ({ params }: Props) => {
    const docId = params.id
    const documentation = docFinder(docId)
    if (!documentation) return null
    return (
        <section className='w-full h-full px-6 flex flex-col gap-6'>
            { documentation.blocks }
        </section>
    )
}

export default page