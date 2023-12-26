import Header from "@/components/widgets/headers/default"

type Props = {
    children: JSX.Element
}
const layout = ({ children }: Props) => {
    return (
        <>
            <Header transparent />
            { children }
        </>
    )
}

export default layout