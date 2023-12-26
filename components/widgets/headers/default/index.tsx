import DmMark from "@/components/shared/dm-mark"
import User from "@/components/shared/user"
import Link from "next/link"

type Props = {
    children?: JSX.Element
    transparent?: boolean
}
const Header = ({ children, transparent=false }: Props) => {
    return (
        <header className={`w-full min-h-[64px] shrink-0 ${ transparent ? 'bg-transparent' : 'bg-card border-b' }`}>
            <div className="w-full h-16 shrink-0 flex items-center justify-between px-6">
                <Link href='/'><DmMark /></Link>
                <User />
            </div>
            { 
                children &&
                <div className=""></div>
            }
        </header>
    )
}

export default Header