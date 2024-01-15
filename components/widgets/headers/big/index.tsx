import dynamic from "next/dynamic"
import Link from "next/link"
const DmMark = dynamic(() => import("@/components/shared/dm-mark"), {
    loading: () => <div className='w-16 h-16 rounded-full bg-muted animate-pulse shrink-0' />
})
// const User = dynamic(() => import("@/components/shared/user"), {
//     loading: () => <div className='w-16 h-16 rounded-full bg-muted animate-pulse shrink-0' />
// })
import User from '../user-circle'
import { ProjectsGrid } from 'ui'
import FeedBack from "../../feedback"
import Image from "next/image"
import { cdn } from "@/helpers/cdn"

type Props = {
    children?: JSX.Element
    transparent?: boolean
    absolute?: boolean

}
const BigHeader = ({ children, absolute=false, transparent=false }: Props) => {
    return (
        <header className={`w-full z-40 min-h-[64px] shrink-0 ${ absolute ? 'absolute top-0 left-0' : '' } ${ transparent ? 'bg-transparent' : 'bg-card border-b' }`}>
            <div className="w-full h-fit shrink-0 flex items-center justify-between px-6 pt-6">
                <Link href='/'><Image src={cdn('dm/icons/DM-dark.svg')} width={48} height={48} alt='dm-logo' /></Link>
                {/* <UserCircle auth={auth} /> */}
                <div className='flex items-center gap-6'>
                    <FeedBack />
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