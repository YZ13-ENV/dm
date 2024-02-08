import { cn } from "@/lib/utils"

type Props = {
  transparent?: boolean
  absolute?: boolean
}
const HeaderSkeleton = ({ transparent=false, absolute=false }: Props) => {
  return (
    <header className={cn(
      absolute ? 'absolute top-0 left-0' : '',
      transparent ? 'bg-transparent' : 'bg-card border-b',
      "w-full h-16 flex items-center justify-between px-6"
    )}>
      <div className="w-8 aspect-square rounded-full bg-muted" />
      <div className="flex items-center gap-2">
        <div className="w-9 aspect-square rounded-full bg-muted" />
        <div className="w-9 aspect-square rounded-full bg-muted" />
        <div className="w-9 aspect-square rounded-full bg-muted" />
      </div>
    </header>
  )
}

export default HeaderSkeleton