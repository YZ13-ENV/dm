import Link from "next/link"
import Image from "next/image"
import User from '../user-circle'
import { ProjectsGrid } from 'ui'
import FeedBack from "../../feedback"
import { cdn } from "@/helpers/cdn"
import Nav from "../nav"

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
                        <Image src={cdn('dm/icons/DM-dark.svg')} width={32} height={32} alt='dm-logo' />
                        <span className="text-xl md:inline hidden font-bold">DM Family</span>
                    </Link>
                    <Nav />
                </div>
                <div className='flex items-center gap-3'>
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