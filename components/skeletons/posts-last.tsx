import GridTemplate from "../shared/grid/grid-template"

const LastPostsSkeleton = () => {
    return (
      <div className="w-full">
        <GridTemplate>
            <div className="w-full h-full md:min-h-full min-h-[24rem] row-span-full cursor-pointer border bg-muted animate-pulse rounded-lg" />
            <div className="w-full h-full md:min-h-full min-h-[24rem] row-span-4 cursor-pointer border bg-muted animate-pulse rounded-lg" />
            <div className="w-full h-full md:min-h-full min-h-[24rem] row-span-3 cursor-pointer border bg-muted animate-pulse rounded-lg" />
            <div className="w-full h-full md:min-h-full min-h-[24rem] row-span-3 cursor-pointer border bg-muted animate-pulse rounded-lg" />
            <div className="w-full h-full md:min-h-full min-h-[24rem] row-span-2 cursor-pointer border bg-muted animate-pulse rounded-lg" />
        </GridTemplate>
      </div>
    )
}

export default LastPostsSkeleton