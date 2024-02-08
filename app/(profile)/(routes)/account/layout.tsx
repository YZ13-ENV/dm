import dynamic from "next/dynamic";
import HeaderSkeleton from "@/components/skeletons/header";
const Header = dynamic(() => import("@/components/widgets/headers/default"), {
  ssr: false,
  loading: () => <HeaderSkeleton />
});
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