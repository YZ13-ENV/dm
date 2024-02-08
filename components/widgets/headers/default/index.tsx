import Link from "next/link"
import Nav from "../nav"
import DarkmaterialMark from "@/components/shared/dm-mark"
import dynamic from "next/dynamic"
import { cn } from "@/lib/utils"
const UserSection = dynamic(() => import("../user-section"), {
    ssr: false
})

type Props = {
    children?: JSX.Element
    transparent?: boolean
    absolute?: boolean
}
const Header = ({ children, transparent=false, absolute=false }: Props) => {
    return (
        <header className={cn(
            absolute ? 'absolute top-0 left-0' : '',
            transparent ? 'bg-transparent' : 'bg-card border-b',
            "w-full min-h-[64px] shrink-0"
        )}>
            <div className="w-full h-16 shrink-0 flex items-center justify-between px-6">
                <div className='flex items-center md:gap-4 gap-2'>
                    <Link href='/' className='flex items-center gap-3'>
                        <DarkmaterialMark size={36} />
                        <span className="text-xl md:inline hidden font-bold">Darkmaterial</span>
                    </Link>
                    <Nav />
                </div>
                <UserSection />
            </div>
            {
                children &&
                <div className=""></div>
            }
        </header>
    )
}

export default Header