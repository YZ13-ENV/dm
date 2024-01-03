import DmMark from "@/components/shared/dm-mark"
import Link from "next/link"
import User from '../user-circle'
import { ProjectsGrid } from 'ui'
import FeedBack from "../../feedback"

type Props = {
    children?: JSX.Element
    transparent?: boolean
}
const Header = ({ children, transparent=false }: Props) => {
    return (
        <header className={`w-full min-h-[64px] shrink-0 ${ transparent ? 'bg-transparent' : 'bg-card border-b' }`}>
            <div className="w-full h-16 shrink-0 flex items-center justify-between px-6">
                <div className='flex items-center gap-3'>
                    <Link href='/'><DmMark /></Link>
                    <span className="text-xl md:inline hidden font-bold">DM Family</span>
                </div>
                <div className='flex items-center gap-4'>
                    <FeedBack />
                    <ProjectsGrid />
                    <User />
                </div>
            </div>
            { 
                children &&
                <div className=""></div>
            }
        </header>
    )
}

export default Header