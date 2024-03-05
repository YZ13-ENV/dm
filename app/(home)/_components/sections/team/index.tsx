import { team } from 'api'
import TeamMemberCard from './member-card'

const TeamSection = async () => {
  const team_data = await team.get('darkmaterial')
  const members = team_data ? [team_data.founder, ...team_data.members] : []
  return (
    <section className="w-full h-fit py-6">
      <div className="lg:max-w-5xl max-w-2xl mx-auto w-full p-6 flex items-center gap-2">
        {/* <Image src="/frame-dark.svg" width={32} height={22} alt='frame-section-logo' /> */}
        <h1 className="!text-2xl">Команда разработки</h1>
      </div>
      <div className="lg:max-w-5xl max-w-2xl mx-auto w-full px-6 grid lg:grid-cols-4 grid-cols-2 auto-rows-auto gap-4 members_grid">
        {
          members.map(member => <TeamMemberCard key={member} member={member} />)
        }
      </div>
    </section>
  )
}

export default TeamSection