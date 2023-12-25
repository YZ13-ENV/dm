import BigHeader from '@/components/widgets/headers/big'
import Image from 'next/image'
import light from '@/public/light.png'
import { Suspense } from 'react'
import AllPostsSkeleton from '@/components/skeletons/posts-all'
import dynamic from 'next/dynamic'
import StatusBar from '@/components/widgets/status-bar'
import DmMark from '@/components/shared/dm-mark'
import Link from 'next/link'
import { dm_family_host, notes_host, yz13_host } from '@/const/host'
const AllPosts = dynamic(() => import('@/components/widgets/posts-all'), {
    loading: () => <AllPostsSkeleton />
})

const page = () => {
    return (
        <>
            <BigHeader transparent />
            <div className="w-full -z-[1] overflow-visible relative h-screen -top-[88px]">
                <Image src='/light.png' className='-z-[1] object-cover 2xl:object-contain' placeholder={`data:image/${light.blurDataURL}`} blurDataURL={light.blurDataURL} fill alt='light' />
                {/* <RemoteServerLogo  dark={config.remote.logo.dark} light={config.remote.logo.light} size={128} alt="dm-logo" /> */}
                <main className="relative flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-4 h-full">
                    <div className="flex flex-col items-center justify-center w-full gap-4 px-4 mt-12 h-fit">
                        <h1 className='z-10 select-none text-3xl font-semibold text-center md:text-6xl text-accent-foreground'>
                            <span className='relative w-fit h-fit px-2 pb-1 inline-block'>Творчество
                                <span style={{ left: 'calc((358px - (51px / 2)) / 2)' }} className="absolute -top-8 px-1 py-0.5 text-xs font-normal rounded-sm bg-muted">358x64</span>
                                <div className="w-full h-[1px] bg-muted-foreground absolute top-[1.25px] left-0" />
                                <div className="w-full h-[1px] bg-muted-foreground absolute bottom-[1.25px] left-0" />
                                <div className="w-full h-[1px] bg-muted-foreground absolute bottom-[1.25px] left-0" />
                                <div className="w-[1px] h-full bg-muted-foreground absolute bottom-0 left-[1.25px]" />
                                <div className="w-[1px] h-full bg-muted-foreground absolute bottom-0 right-[1.25px]" />
                                <div className="w-1 h-1 bg-accent-foreground top-0 left-0 absolute" />
                                <div className="w-1 h-1 bg-accent-foreground top-0 right-0 absolute" />
                                <div className="w-1 h-1 bg-accent-foreground bottom-0 left-0 absolute" />
                                <div className="w-1 h-1 bg-accent-foreground bottom-0 right-0 absolute" />
                            </span>&nbsp;и производительность
                        </h1>
                        <span className='text-center font-light text-muted-foreground'>
                            Создавайте и выкладывайте свои работы у нас, планируя новое, воспользуйтесь нашими сервисами. 
                            Для разные потребностей вам понадобится всего один аккаунт в DM Family
                        </span>
                    </div>
                </main>
            </div>
            <div className="w-full h-fit border-y py-12 gap-12 flex flex-col">
                <section className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-4">
                    <h1 className='md:text-4xl text-2xl font-bold text-accent-foreground'>Вы можете опробовать мои проекты</h1>
                    <span className='text-base font-light text-muted-foreground'>
                        Вы можете опробовать приложения и без аккаунта DM Family, но для лучшего пользовательского опыта,
                        рекомендую воспользоваться аккаунтом DM Family, это быстро и работает для все приложений.
                    </span>
                </section>
                <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-3 grid-rows-6 gap-6 h-full">
                    <Link href={yz13_host}
                    className="w-full flex flex-col gap-4 justify-center items-center h-full min-h-[20rem] rounded-xl border hover:border-accent-foreground group transition-colors cursor-pointer overflow-hidden relative">
                        <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-muted to-transparent hidden group-hover:block opacity-50"></div>
                        <span className='text-4xl z-10 font-semibold text-accent-foreground'>DM/YZ13</span>
                    </Link>
                    <Link href={dm_family_host} 
                    className="w-full flex flex-col gap-4 justify-center items-center h-full min-h-[20rem] rounded-xl border hover:border-accent-foreground group transition-colors cursor-pointer overflow-hidden relative">
                        <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-muted to-transparent hidden group-hover:block opacity-50"></div>
                        <span className='text-4xl z-10 font-semibold text-accent-foreground'>
                            D<span className='text-muted-foreground group-hover:inline hidden'>ark</span>M<span className='text-muted-foreground group-hover:inline hidden'>aterial</span>
                        </span>
                        <span className='text-4xl z-10 font-semibold text-accent-foreground'>Family</span>
                    </Link>
                    <Link href={notes_host}
                    className="w-full flex flex-col gap-4 justify-center items-center h-full min-h-[20rem] rounded-xl border hover:border-accent-foreground group transition-colors cursor-pointer overflow-hidden relative">
                        <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-muted to-transparent hidden group-hover:block opacity-50"></div>
                        <span className='text-4xl z-10 font-semibold text-accent-foreground'>DM/Заметки</span>
                    </Link>
                    <div className="w-full flex flex-col gap-4 justify-center items-center h-full min-h-[20rem] rounded-xl border hover:border-accent-foreground group transition-colors cursor-pointer overflow-hidden relative">
                        <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-muted to-transparent hidden group-hover:block opacity-50"></div>
                        <span className='text-4xl z-10 font-semibold text-muted-foreground'>...</span>
                    </div>
                    <div className="w-full flex flex-col gap-4 justify-center items-center h-full min-h-[20rem] rounded-xl border hover:border-accent-foreground group transition-colors cursor-pointer overflow-hidden relative">
                        <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-muted to-transparent hidden group-hover:block opacity-50"></div>
                        <span className='text-4xl z-10 font-semibold text-muted-foreground'>...</span>
                    </div>
                    <div className="w-full flex flex-col gap-4 justify-center items-center h-full min-h-[20rem] rounded-xl border hover:border-accent-foreground group transition-colors cursor-pointer overflow-hidden relative">
                        <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-muted to-transparent hidden group-hover:block opacity-50"></div>
                        <span className='text-4xl z-10 font-semibold text-muted-foreground'>...</span>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-screen h-fit py-12">
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
                        <span  className='text-xl font-semibold'>DM</span>
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