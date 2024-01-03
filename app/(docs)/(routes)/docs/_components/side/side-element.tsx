import { SideElementProps } from "@/types/docs"
import { BiChevronRight } from "react-icons/bi"

type Props = {
    element: SideElementProps
}
const SideElement = ({ element }: Props) => {
    return (
        <div className={`w-full h-8 group flex px-2 items-center gap-2 ${element.hasArrow ? 'justify-between' : 'justify-start'}`}>
            <span className="text-sm text-muted-foreground select-none group-hover:text-accent-foreground">{ element.name }</span>
            { element.hasArrow && <BiChevronRight size={18} className='text-muted-foreground group-hover:text-accent-foreground' /> }
        </div>
    )
}

export default SideElement