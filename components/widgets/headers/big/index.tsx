import Link from "next/link"
import User from '../user-circle'
import { ProjectsGrid } from 'ui'
import FeedBack from "../../feedback"
import NotificationsWrapper from "../notifications"
import DmMark from "@/components/shared/dm-mark"

type Props = {
    children?: JSX.Element
    transparent?: boolean
    absolute?: boolean

}
const BigHeader = ({ children, absolute=false, transparent=false }: Props) => {
    return (
        <header className={`w-full z-40 min-h-[64px] shrink-0 ${ absolute ? 'absolute top-0 left-0' : '' } ${ transparent ? 'bg-transparent' : 'bg-card border-b' }`}>
            <div className="w-full h-fit shrink-0 flex items-center justify-between px-6 pt-6">
                <div className='flex items-center md:gap-4 gap-2'>
                    <Link href='/'><DmMark size={48} /></Link>
                    {/* <Nav /> */}
                </div>
                <div className='flex items-center gap-3'>
                    <FeedBack />
                    <NotificationsWrapper />
                    <ProjectsGrid />
                    <User size={48} />
                </div>
            </div>
            {
                children &&
                <div className=""></div>
            }
        </header>
    )
}

export default BigHeader