import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import FrameGridSkeleton from "./frame-grid"
const FrameGrid = dynamic(() => import("./grid"), {
  loading: () => <FrameGridSkeleton />
})

const FrameSection = async () => {
  return (
    <section className="w-full h-fit py-6">
      <div className="lg:max-w-5xl max-w-2xl mx-auto w-full p-6 flex items-center gap-2">
        <Image src="/frame-dark.svg" width={32} height={22} alt='frame-section-logo' />
        <div className="flex items-center gap-2">
          <h1 className="!text-2xl text-muted-foreground">Подборка популярных работ от</h1>
          <Link href="https://frame.darkmaterial.space" className="gap-2 inline-flex items-center text-2xl font-bold text-accent-foreground">
            Frame
          </Link>
        </div>
      </div>
      <Suspense fallback={<FrameGridSkeleton />}>
        <FrameGrid />
      </Suspense>
    </section>
  )
}

export default FrameSection