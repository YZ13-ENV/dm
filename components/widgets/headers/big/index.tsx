import dynamic from "next/dynamic"
const DmMark = dynamic(() => import("@/components/shared/dm-mark"), {
    loading: () => <div className='w-16 h-16 rounded-full bg-muted animate-pulse shrink-0' />
})
const User = dynamic(() => import("@/components/shared/user"), {
    loading: () => <div className='w-16 h-16 rounded-full bg-muted animate-pulse shrink-0' />
})

type Props = {
    children?: JSX.Element
    transparent?: boolean
    absolute?: boolean

}
const BigHeader = ({ children, absolute=false, transparent=false }: Props) => {
    return (
        <header className={`w-full z-40 min-h-[64px] shrink-0 ${ absolute ? 'absolute top-0 left-0' : '' } ${ transparent ? 'bg-transparent' : 'bg-card border-b' }`}>
            <div className="w-full h-fit shrink-0 flex items-center justify-between px-6 pt-6">
                <DmMark size={64} />
                <User buttonSize='lg' size={64} />
            </div>
            { 
                children &&
                <div className=""></div>
            }
        </header>
    )
}

export default BigHeader