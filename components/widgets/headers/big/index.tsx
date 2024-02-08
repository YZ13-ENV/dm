import Link from "next/link"
import DmMark from "@/components/shared/dm-mark"
import { cn } from '@/lib/utils'
import dynamic from "next/dynamic"
const UserSection = dynamic(() => import("../user-section"), {
    ssr: false
})
type Props = {
    children?: JSX.Element
    className?: string
    hideLogo?: boolean
    transparent?: boolean
    absolute?: boolean

}
const BigHeader = ({ children, className='', hideLogo=false, absolute=false, transparent=false }: Props) => {
    return (
        <header className={cn(
            (absolute ? 'absolute top-0 left-0' : ''),
            (transparent ? 'bg-transparent' : 'bg-card border-b'),
            "w-full z-40 min-h-[64px] shrink-0",
            className
        )}>
            <div className="flex items-center justify-between w-full px-6 pt-6 h-fit shrink-0">
                <div className='flex items-center gap-2 md:gap-4'>
                    {
                        !hideLogo
                        ? <Link href='/'><DmMark size={48} /></Link>
                        : <div className='w-12 aspect-square' />
                    }
                    {/* <Nav /> */}
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

export default BigHeader