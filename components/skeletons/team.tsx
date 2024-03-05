import TeamMemberCardSkeleton from "./member-card"

const TeamSkeleton = () => {
  return (
    <div className="lg:max-w-5xl max-w-2xl mx-auto w-full px-6 grid lg:grid-cols-4 grid-cols-2 auto-rows-auto gap-4 members_grid">
      <TeamMemberCardSkeleton />
      <TeamMemberCardSkeleton />
      <TeamMemberCardSkeleton />
      <TeamMemberCardSkeleton />
    </div>
  )
}

export default TeamSkeleton