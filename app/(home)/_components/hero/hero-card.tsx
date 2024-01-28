import { cn } from "@/lib/utils"
import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi"


type Props = {
  name: string
  description: string
  disabled?: boolean
  link?: string
  children?: JSX.Element | JSX.Element[]
}
const HeroCard = ({
  description,
  name,
  link,
  disabled=false,
  children
}: Props) => {
  return (
    <div className={cn(
      "overflow-hidden home-card group",
      disabled ? 'disabled-home-card' : ''
    )}>
      { link && <Link href={link} className="absolute top-0 left-0 z-10 w-full h-full" /> }
      { children }
      <div className="absolute bottom-0 left-0 flex items-center justify-between w-full p-4 h-fit">
        <div className="flex flex-col w-fit">
          <span className={cn(
            "text-base font-medium",
            disabled ? 'text-muted-foreground' : 'text-accent-foreground'
          )}>{ name }</span>
          <span className="text-sm text-muted-foreground">{ description }</span>
        </div>
        <BiRightArrowAlt size={24} className={cn(
          'transition-colors ',
          disabled ? 'text-muted-foreground' : 'text-muted-foreground group-hover:text-accent-foreground'
        )} />
      </div>
    </div>
  )
}
export default HeroCard