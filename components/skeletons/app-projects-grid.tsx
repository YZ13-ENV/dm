import ProjectFullSkeleton from "./project-full"

const AppProjectsGridSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto w-full px-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-rows-auto gap-0 py-12">
      <ProjectFullSkeleton />
      <ProjectFullSkeleton />
      <ProjectFullSkeleton />
      <ProjectFullSkeleton />
      <ProjectFullSkeleton />
      <ProjectFullSkeleton />
      <ProjectFullSkeleton />
    </div>
  )
}
export default AppProjectsGridSkeleton