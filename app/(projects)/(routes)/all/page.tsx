import AppProjectsGridSkeleton from "@/components/skeletons/app-projects-grid"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
const ProjectsAppGrid = dynamic(() => import("../../_components/projects-grid"), {
  loading: () => <AppProjectsGridSkeleton />
})
const UserSection = dynamic(() => import("@/components/widgets/headers/user-section"), {
  ssr: false,
  loading: () => <div className="w-fit h-fit flex items-center gap-2">
    <div className="w-9 rounded-full aspect-square bg-muted" />
    <div className="w-9 rounded-full aspect-square bg-muted" />
    <div className="w-9 rounded-full aspect-square bg-muted" />
  </div>
});
const page = async () => {
  return (
    <>
      <header className="max-w-4xl mx-auto h-16 w-full px-6 flex items-center justify-between">
        <Link href='/home'>
          <Image src="/dm-star-dark.svg" width={32} height={32} alt='app-logo' />
        </Link>
        <div className="flex items-center gap-2">
          <UserSection />
        </div>
      </header>
      <div className="max-w-4xl mx-auto">
        <Suspense fallback={<AppProjectsGridSkeleton />}>
          <ProjectsAppGrid />
        </Suspense>
      </div>
    </>
  )
}

export default page
