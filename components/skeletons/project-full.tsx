
const ProjectFullSkeleton = () => {
  return (
    <div className="relative w-full h-full flex items-start gap-2.5 p-4 animate-pulse">
      <div className="rounded-lg bg-card w-7 aspect-square" />
      <div className="w-full h-full flex flex-col gap-2">
        <div className="rounded-sm bg-card w-full h-5" />
        <div className="rounded-sm bg-card w-1/2 h-5" />
        <div className="rounded-sm bg-card w-1/3 h-5" />
        <div className="mt-auto flex items-center justify-start gap-2">
          <div className="rounded-sm bg-card w-4 aspect-square" />
          <div className="rounded-sm bg-card w-4 aspect-square" />
          <div className="rounded-sm bg-card w-4 aspect-square" />
        </div>
      </div>
    </div>
  )
}

export default ProjectFullSkeleton