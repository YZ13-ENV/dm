
const FrameGridSkeleton = () => {
  const CardSkeleton = () => {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="w-full rounded-lg aspect-[4/3]" />
        <div className="w-full h-9" />
      </div>
    )
  }
  return (
    <div className="lg:max-w-5xl max-w-2xl mx-auto w-full px-6 grid shots-grid auto-rows-auto gap-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  )
}

export default FrameGridSkeleton