
type BadgeProps = {
    children?: string
}
const DmFamilyBadge = ({ children }: BadgeProps) => {
    return (
        <div className="p-[1px] w-fit h-fit rounded-md inline-flex items-center justify-center bg-gradient-to-tl from-blue-600 to-rose-600">
            <span className="w-fit h-fit px-2 py-0.5 rounded-md select-none bg-background bg-opacity-80 text-sm text-accent-foreground">{children}</span>
        </div>
    )
}

export default DmFamilyBadge