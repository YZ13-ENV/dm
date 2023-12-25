import DmMark from "@/components/shared/dm-mark"
import User from "@/components/shared/user"

type Props = {
    children?: JSX.Element
}
const Header = ({ children }: Props) => {
    return (
        <header className='w-full min-h-[64px] shrink-0 bg-card border-b'>
            <div className="w-full h-16 shrink-0 flex items-center justify-between px-6">
                <DmMark />
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