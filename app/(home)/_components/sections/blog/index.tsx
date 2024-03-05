import AllPostsSkeleton from "@/components/skeletons/posts-all"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Suspense } from "react"
const AllPosts = dynamic(() => import("./posts-all"), {
  loading: () => <AllPostsSkeleton />
})

const BlogSection = () => {
  return (
    <section className="w-full h-fit py-6">
      <div className="lg:max-w-5xl max-w-2xl mx-auto w-full p-6 flex items-center gap-2">
        {/* <Image src="/frame-dark.svg" width={32} height={22} alt='frame-section-logo' /> */}
        <div className="flex items-center gap-2">
          <h1 className="!text-2xl text-muted-foreground">Последние посты от</h1>
          <Link href="https://yz13.darkmaterial.space" className="gap-2 inline-flex items-center text-2xl font-bold text-accent-foreground">
            YZ13
          </Link>
        </div>
      </div>
      <div className="mx-auto lg:max-w-5xl max-w-2xl px-6">
        <Suspense fallback={<AllPostsSkeleton />}>
          <AllPosts />
        </Suspense>
      </div>
    </section>
  )
}

export default BlogSection