import { cn } from "@/lib/utils"

type Props = {
  transparent?: boolean
  absolute?: boolean
}
const BigHeaderSkeleton = ({ transparent=false, absolute=false }: Props) => {
  return (
    <header className={cn(
      absolute ? 'absolute top-0 left-0' : '',
      transparent ? 'bg-transparent' : 'bg-card border-b',
      "w-full min-h-[64px] pt-6 h-fit flex items-center justify-between px-6"
    )}>
      <div className="w-12 aspect-square rounded-full bg-muted" />
      <div className="flex items-center gap-2">
        <div className="w-9 aspect-square rounded-full bg-muted" />
        <div className="w-9 aspect-square rounded-full bg-muted" />
        <div className="w-9 aspect-square rounded-full bg-muted" />
      </div>
    </header>
  )
}

export default BigHeaderSkeleton