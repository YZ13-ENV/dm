const TeamMemberCardSkeleton = () => {
  return (
    <div className="w-full aspect-[1/1.15] p-3 rounded-xl bg-card border flex flex-col gap-2">
      <div className="w-full aspect-[1/1.15] rounded-lg bg-muted"></div>
      <div className="flex items-center justify-between w-full h-fit">
        <span className="w-1/2 h-6 rounded-md bg-muted" />
        <span className="w-1/3 h-6 rounded-md bg-muted" />
      </div>
      <div className="flex items-center justify-between w-full h-fit">
        <span className="w-1/3 h-6 rounded-md bg-muted" />
        <span className="w-1/4 h-6 rounded-md bg-muted" />
      </div>
    </div>
  )
}
export default TeamMemberCardSkeleton