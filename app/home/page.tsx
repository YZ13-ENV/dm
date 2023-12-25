import BigHeader from '@/components/widgets/headers/big'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <BigHeader transparent />
            <div className="w-full -z-[1] overflow-visible relative h-screen -top-[88px]">
                <Image src='/light.png' className='-z-[1] object-contain' fill alt='light' />
                {/* <RemoteServerLogo  dark={config.remote.logo.dark} light={config.remote.logo.light} size={128} alt="dm-logo" /> */}
                <main className="relative flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-4 h-full">
                    <div className="flex flex-col items-center justify-center w-full gap-4 px-4 mt-12 h-fit">
                        <h1 className='z-10 text-3xl font-semibold text-center md:text-6xl text-accent-foreground'>
                            Место&nbsp;для&nbsp;творчества&nbsp;и производительности
                        </h1>
                        <span className='text-center text-muted-foreground'>
                            Создавайте и выкладывайте свои работы у нас, планируя новое, воспользуйтесь нашими сервисами. 
                            Для разные потребностей вам понадобится всего один аккаунт в DM Family
                        </span>
                    </div>
                </main>
            </div>
            <div className="w-full h-[75vh] border-y">

            </div>
            <div className="w-full h-screen">

            </div>
            <footer className='border-t py-12 px-y bg-card'>

            </footer>
        </>
    )
}

export default page