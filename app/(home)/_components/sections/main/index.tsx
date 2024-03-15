import Image from "next/image"
import SearchWrapper from "./search-wrapper"
// import AppPreviewSkeleton from "@/components/skeletons/app-preview"
// const AllPreview = dynamic(() => import("./all-preview"), {
// loading: () => <AppPreviewSkeleton />
// })


const MainSection = () => {
  return (
    <section style={{ height: "calc(100dvh - 156px)" }} className="w-full flex relative flex-col items-center justify-center gap-6">
      {/* <StarField starsCount={200} /> */}
      <div className="flex items-center gap-4">
        <Image src="/dm-star-dark.svg" width={96} height={96} alt='app-logo' />
        <h1 className="!text-5xl text-start">
          Dark
          <br />
          Material
        </h1>
      </div>
      <span className="max-w-2xl my-6 text-sm text-center text-muted-foreground">Добро пожаловать в Darkmaterial, надеемся вам тут понравится</span>
      <div className="lg:max-w-5xl max-w-2xl w-full mx-auto px-6">
        <SearchWrapper />
      </div>

      {/* <Suspense fallback={<AppPreviewSkeleton />}>
        <AllPreview />
      </Suspense> */}
    </section>
  )
}

export default MainSection