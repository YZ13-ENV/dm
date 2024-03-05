import { bum } from "api"
import Image from "next/image"
import ShotCard from "./shot-card"

const FrameSection = async () => {
  const { data } = await bum.shots.all('new')
  return (
    <section className="w-full h-fit py-6">
      <div className="lg:max-w-5xl max-w-2xl mx-auto w-full p-6 flex items-center gap-2">
        <Image src="/frame-dark.svg" width={32} height={22} alt='frame-section-logo' />
        <h1 className="!text-2xl"><span className="text-muted-foreground">Подборка популярных работ от</span> Frame</h1>
      </div>
      <div className="lg:max-w-5xl max-w-2xl mx-auto w-full px-6 grid shots-grid auto-rows-auto gap-4">
        {
          data
            .map(shot => <ShotCard key={shot.doc_id} shot={shot} enableOutline />)
        }
      </div>
    </section>
  )
}

export default FrameSection