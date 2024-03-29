import { bum } from "api"
import { unstable_noStore } from "next/cache"
import ShotCard from "./shot-card"

const FrameGrid = async () => {
  unstable_noStore()
  const { data } = await bum.shots.all('new')
  return (
    <div className="lg:max-w-5xl max-w-2xl mx-auto w-full px-6 grid shots-grid auto-rows-auto gap-4">
      {
        data
          .map(shot => <ShotCard key={shot.doc_id} shot={shot} enableOutline />)
      }
    </div>
  )
}

export default FrameGrid