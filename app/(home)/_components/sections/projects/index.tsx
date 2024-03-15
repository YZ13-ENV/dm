import AppProjectsGridSkeleton from '@/components/skeletons/app-projects-grid'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Suspense } from 'react'
const ProjectsAppGrid = dynamic(() => import("@/app/(projects)/_components/projects-grid"), {
  loading: () => <AppProjectsGridSkeleton />
})

const ProjectsSection = () => {
  return (
    <section className="w-full h-fit py-6">
      <div className="lg:max-w-5xl max-w-2xl mx-auto w-full p-6 flex items-center gap-2">
        <Link href="/all" className="!text-2xl font-bold">Проекты и сервисы Darkmaterial</Link>
      </div>
      <div className='lg:max-w-5xl max-w-2xl mx-auto'>
        <Suspense fallback={<AppProjectsGridSkeleton />}>
          <ProjectsAppGrid />
        </Suspense>
      </div>
    </section>
  )
}

export default ProjectsSection