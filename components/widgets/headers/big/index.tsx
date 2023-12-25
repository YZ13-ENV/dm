import DmMark from "@/components/shared/dm-mark"
import User from "@/components/shared/user"

type Props = {
    children?: JSX.Element
    transparent?: boolean
}
const BigHeader = ({ children, transparent=false }: Props) => {
    return (
        <header className={`w-full z-40 min-h-[64px] shrink-0 ${ transparent ? 'bg-transparent' : 'bg-card border-b' }`}>
            <div className="w-full h-fit shrink-0 flex items-center justify-between px-6 pt-6">
                <DmMark size={64} />
                <User size={64} />
            </div>
            { 
                children &&
                <div className=""></div>
            }
        </header>
    )
}

export default BigHeader