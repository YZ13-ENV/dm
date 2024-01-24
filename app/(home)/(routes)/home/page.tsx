import BigHeader from '@/components/widgets/headers/big'
import Image from 'next/image'
import light from '@/public/light.webp'
import { Suspense } from 'react'
import AllPostsSkeleton from '@/components/skeletons/posts-all'
import dynamic from 'next/dynamic'
import StatusBar from '@/components/widgets/status-bar'
import DmMark from '@/components/shared/dm-mark'
import HeroText from '../../_components/hero-text'
import HomeProjects from '../../_components/home-projects'
const AllPosts = dynamic(() => import('@/components/widgets/posts-all'), {
    loading: () => <AllPostsSkeleton />
})

const page = () => {
    return (
        <>
            <BigHeader transparent absolute />
            <div className="w-full overflow-visible relative h-[100dvh]">
                <Image src={light} className='-z-[1] object-cover' placeholder={`data:image/${light.blurDataURL}`} blurDataURL={light.blurDataURL} fill alt='light' />
                {/* <RemoteServerLogo  dark={config.remote.logo.dark} light={config.remote.logo.light} size={128} alt="dm-logo" /> */}
                <main className="relative flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-4 h-full">
                    <div className="flex flex-col items-center justify-center w-full gap-4 px-4 mt-12 h-fit">
                        <HeroText />
                    </div>
                </main>
            </div>
            <HomeProjects />
            <div className="w-full h-fit py-12">
                <div className="max-w-7xl w-full h-full mx-auto px-6">
                    <StatusBar />
                    <Suspense fallback={<AllPostsSkeleton />}>
                        <AllPosts />
                    </Suspense>
                </div>
            </div>
            <footer className='border-t py-12 px-y bg-card'>
                <div className="w-full h-fit flex max-w-7xl px-6 mx-auto items-center justify-between">
                    <div className="flex items-center gap-2">
                        <DmMark size={32} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span  className='text-xl text-muted-foreground font-semibold'>by YZ13</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default page