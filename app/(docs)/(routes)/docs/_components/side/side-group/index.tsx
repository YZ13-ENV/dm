"use client"
import { Separator } from "@/components/ui/separator"
import { SideGroupProps } from "@/types/docs"
import { useState } from "react"
import { BiChevronRight } from "react-icons/bi"

type Props = {
    group: SideGroupProps
}
const SideGroup = ({ group }: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className="w-full h-fit">
            <div className="w-full h-fit flex items-center justify-between">
                <span className='text-sm text-muted-foreground hover:text-accent-foreground cursor-pointer select-none normal-case'>{group.name}</span>
                <BiChevronRight onClick={() => setOpen(!open)} size={20} 
                className={`text-muted-foreground ${open ? 'rotate-90' : ''} hover:text-accent-foreground cursor-pointer transition-transform`} />
            </div>
            {
                open &&
                <div className="w-full h-fit flex flex-col relative gap-4 mt-4">
                    <div className="absolute left-0 w-4 h-full">
                        <Separator orientation="vertical" className="mx-auto" />
                    </div>
                    {
                        group.items.map(item => <div key={item + '-group-item'} className="cursor-pointer w-full h-fit pl-2 flex items-center justify-start gap-4 group">
                            <Separator orientation="vertical" className="z-10 h-6 transition-colors group-hover:bg-accent-foreground" />
                            <span className="text-sm text-muted-foreground select-none transition-colors group-hover:text-accent-foreground">{ item.name }</span>
                            { item.hasArrow && <BiChevronRight size={18} className='ml-auto text-muted-foreground transition-colors group-hover:text-accent-foreground' /> }
                        </div>
                    )}

                </div>
            }
        </div>
    )
}

export default SideGroup