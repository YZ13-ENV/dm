import { team } from "@/api/team"
import TeamMemberCard from "./member-card"
import { Suspense } from "react"
import TeamMemberCardSkeleton from "@/components/skeletons/member-card"

const TeamSection = async() => {
  const team_data = await team.get('darkmaterial')


  const members = team_data ? [team_data.founder, ...team_data.members] : []
  if (!team_data) return null
  return (
    <div id="team" className="z-10 flex flex-col w-full min-h-screen gap-12 py-24">
      <section className="flex flex-col w-full gap-4 px-6 mx-auto max-w-7xl">
        <h1 className='text-2xl font-bold md:text-4xl text-accent-foreground'>Команда</h1>
        {/* <span className='text-base font-light text-muted-foreground'></span> */}
      </section>
      <section className="grid w-full gap-4 px-6 mx-auto max-w-7xl members_grid">
        {
          members.map(member =>
            <Suspense key={member} fallback={ <TeamMemberCardSkeleton /> }>
              <TeamMemberCard member={member} />
            </Suspense>
          )
        }
        {/* <TeamMemberCardSkeleton /> */}
        {/* <TeamMemberCardSkeleton /> */}
        {/* <TeamMemberCardSkeleton /> */}
      </section>
    </div>
  )
}

export default TeamSection