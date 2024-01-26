import Link from "next/link"
import User from '../user-circle'
import { ProjectsGrid } from 'ui'
import FeedBack from "../../feedback"
import Nav from "../nav"
import NotificationsWrapper from "../notifications"
import DmMark from "@/components/shared/dm-mark"

type Props = {
    children?: JSX.Element
    transparent?: boolean
}
const Header = ({ children, transparent=false }: Props) => {
    return (
        <header className={`w-full min-h-[64px] shrink-0 ${ transparent ? 'bg-transparent' : 'bg-card border-b' }`}>
            <div className="w-full h-16 shrink-0 flex items-center justify-between px-6">
                <div className='flex items-center md:gap-4 gap-2'>
                    <Link href='/' className='flex items-center gap-3'>
                        <DmMark size={32} />
                        <span className="text-xl md:inline hidden font-bold">DM</span>
                    </Link>
                    <Nav />
                </div>
                <div className='flex items-center gap-3'>
                    <NotificationsWrapper />
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