"use client"
import { Separator } from "@/components/ui/separator"
import { docs } from "@/helpers/docs"
import { SideGroupProps } from "@/types/docs"
import Link from "next/link"
import { useState } from "react"
import { BiChevronRight } from "react-icons/bi"

type Props = {
    group: SideGroupProps
    providedId?: string
}
const SideGroup = ({ group, providedId }: Props) => {
    // const isInGroupId = providedId ? group.id === providedId : false
    const isInGroupItems =  providedId ? group.items.findIndex(item => item.id === providedId) > -1 : false
    const isIncluded = isInGroupItems
    const [open, setOpen] = useState<boolean>(isIncluded || false)
    return (
        <div className="w-full h-fit">
            <div className="w-full h-fit flex items-center justify-between">
                <Link href={docs(group.id)} className='text-sm text-muted-foreground hover:text-accent-foreground cursor-pointer select-none normal-case'>{group.name}</Link>
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
                        group.items.map(item => <div key={item.id + '-group-item'} className="cursor-pointer w-full h-fit pl-2 flex items-center justify-start gap-4 group">
                            <Separator orientation="vertical" className="z-10 h-6 transition-colors group-hover:bg-accent-foreground" />
                            <Link href={docs(item.id)}
                            className="text-sm text-muted-foreground select-none transition-colors group-hover:text-accent-foreground">{ item.name }</Link>
                            { item.hasArrow && <BiChevronRight size={18} className='ml-auto text-muted-foreground transition-colors group-hover:text-accent-foreground' /> }
                        </div>
                    )}

                </div>
            }
        </div>
    )
}

export default SideGroup