import { config } from '@/app.config'
import RemoteServerLogo from '@/components/shared/remote/remote-logo-server'
import Header from '@/components/widgets/header'

const page = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-4 h-[75vh]">
                <RemoteServerLogo  dark={config.remote.logo.dark} light={config.remote.logo.light} size={128} alt="dm-logo" />
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
        </>
    )
}

export default page