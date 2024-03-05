import TeamMemberCardSkeleton from "@/components/skeletons/member-card"
import { team } from "api"
import { Suspense } from "react"
import TeamMemberCard from "./member-card"

const MembersGrid = async () => {
  const team_data = await team.get('darkmaterial')
  const members = team_data ? [team_data.founder, ...team_data.members] : []
  return (
    <div className="lg:max-w-5xl max-w-2xl mx-auto w-full px-6 grid lg:grid-cols-4 grid-cols-2 auto-rows-auto gap-4 members_grid">
      {
        members.map(member =>
          <Suspense key={member} fallback={<TeamMemberCardSkeleton />}>
            <TeamMemberCard member={member} />
          </Suspense>
        )
      }
    </div>
  )
}

export default MembersGrid