
const TeamSection = () => {
  const TeamMemberCard = () => {
    return (
      <div className="w-full aspect-[1/1.15] p-3 rounded-xl bg-card border flex flex-col gap-2">
        <div className="w-full aspect-[1/1.15] rounded-lg bg-muted"></div>
        <div className="w-full h-fit flex items-center justify-between">
          <span className="text-accent-foreground font-medium">Владимир</span>
          <span className="text-muted-foreground text-sm font-light">@YZ13</span>
        </div>
        <div className="w-full h-fit flex items-center justify-between">
          <span className="text-muted-foreground text-sm font-light">Fullstack-разработчик</span>
          <span className="text-muted-foreground text-sm font-light">???</span>
        </div>
      </div>
    )
  }
  const TeamMemberCardSkeleton = () => {
    return (
      <div className="w-full aspect-[1/1.15] p-3 rounded-xl bg-card border flex flex-col gap-2">
        <div className="w-full aspect-[1/1.15] rounded-lg bg-muted"></div>
        <div className="w-full h-fit flex items-center justify-between">
          <span className="w-1/2 h-6 rounded-md bg-muted" />
          <span className="w-1/3 h-6 rounded-md bg-muted" />
        </div>
        <div className="w-full h-fit flex items-center justify-between">
          <span className="w-1/3 h-6 rounded-md bg-muted" />
          <span className="w-1/4 h-6 rounded-md bg-muted" />
        </div>
      </div>
    )
  }
  return (
    <div id="team" className="w-full min-h-screen py-24 gap-12 flex flex-col z-10">
      <section className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-4">
        <h1 className='md:text-4xl text-2xl font-bold text-accent-foreground'>Команда</h1>
        {/* <span className='text-base font-light text-muted-foreground'></span> */}
      </section>
      <section className="max-w-7xl mx-auto w-full px-6 gap-4 grid grid-cols-4 auto-rows-auto">
        <TeamMemberCard />
        <TeamMemberCardSkeleton />
        <TeamMemberCardSkeleton />
        <TeamMemberCardSkeleton />
      </section>
    </div>
  )
}

export default TeamSection