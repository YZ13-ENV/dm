import Link from "next/link"

const AppPreviewSkeleton = () => {
  return (
    <>
      <div className="w-full grid lg:grid-cols-7 sm:grid-cols-4 grid-cols-3 auto-rows-auto lg:max-w-5xl max-w-2xl gap-4 px-6">
        <div className="w-32 aspect-square rounded-2xl bg-muted" />
        <div className="w-32 aspect-square rounded-2xl bg-muted" />
        <div className="w-32 aspect-square rounded-2xl bg-muted" />
      </div>
      <div className="w-full flex items-center justify-end lg:max-w-5xl max-w-2xl px-6 mx-auto">
        <Link
          href='/all'
          className="h-5 w-32 rounded-sm bg-muted"
        />
      </div>
    </>
  )
}

export default AppPreviewSkeleton