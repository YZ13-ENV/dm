import TeamSkeleton from '@/components/skeletons/team'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Suspense } from 'react'
import { BiChevronRight } from 'react-icons/bi'
const MembersGrid = dynamic(() => import('./members-grid'), {
  loading: () => <TeamSkeleton />
})

const TeamSection = async () => {
  return (
    <section className="w-full h-fit py-6">
      <div className="lg:max-w-5xl max-w-2xl mx-auto w-full p-6 flex items-center gap-2">
        {/* <Image src="/frame-dark.svg" width={32} height={22} alt='frame-section-logo' /> */}
        <Link href='/team' className="!text-2xl font-bold inline-flex items-center 2-gap">
          Команда разработки
          <BiChevronRight />
        </Link>
      </div>
      <Suspense fallback={<TeamSkeleton />}>
        <MembersGrid />
      </Suspense>
    </section>
  )
}

export default TeamSection