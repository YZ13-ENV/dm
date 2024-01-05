import Content from "@/app/(docs)/_components/content"

type Props = {
    params: {
        id: string[]
    }
}
const page = ({ params }: Props) => {
    const docId = params.id
    return (
        <Content docId={docId} />
    )
}

export default page