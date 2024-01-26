import LastPostsSkeleton from "@/components/skeletons/posts-last"
import StatusBar from "@/components/widgets/status-bar"
import dynamic from "next/dynamic"
import { Suspense } from "react"
const LastPosts = dynamic(() => import("@/components/widgets/posts-last"), {
  loading: () => <LastPostsSkeleton />
})

const PostsSection = () => {
  return (
    <div className="w-full h-fit py-12 gap-12 flex flex-col">
      <section className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-4">
        <StatusBar />
        <Suspense fallback={<LastPostsSkeleton />}>
          <LastPosts />
        </Suspense>
      </section>
    </div>
  )
}

export default PostsSection