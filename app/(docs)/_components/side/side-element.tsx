import { docs } from "@/helpers/docs"
import { SideElementProps } from "@/types/docs"
import Link from "next/link"
import { BiChevronRight } from "react-icons/bi"

type Props = {
    element: SideElementProps
}
const SideElement = ({ element }: Props) => {
    return (
        <div className={`w-full h-8 group flex items-center gap-2 ${element.hasArrow ? 'justify-between' : 'justify-start'}`}>
            <Link href={docs(element.id)} className='text-sm text-muted-foreground hover:text-accent-foreground cursor-pointer select-none normal-case'>{element.name}</Link>
            { element.hasArrow && <BiChevronRight size={18} className='text-muted-foreground group-hover:text-accent-foreground' /> }
        </div>
    )
}

export default SideElement