import { projects } from "@/const/projects";
import Link from "next/link";


const HomeProjects = () => {

    return (
        <div className="w-full h-fit border-y py-12 gap-12 flex flex-col">
            <section className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-4">
                <h1 className='md:text-4xl text-2xl font-bold text-accent-foreground'>Вы можете опробовать мои проекты</h1>
                <span className='text-base font-light text-muted-foreground'>Вы можете опробовать приложения и без аккаунта DM Family, но для лучшего пользовательского опыта, рекомендую воспользоваться аккаунтом DM Family, это быстро и работает для все приложений.</span>
            </section>
            <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-3 grid-rows-6 gap-6 h-full">
                {
                    projects.map(item =>
                        <Link href={item.link} key={item.link}
                        className="w-full flex flex-col gap-4 justify-center items-center h-full min-h-[20rem] rounded-xl border hover:border-accent-foreground group transition-colors cursor-pointer overflow-hidden relative">
                            <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-muted to-transparent hidden group-hover:block opacity-50"></div>
                            <span className='text-4xl z-10 font-semibold text-accent-foreground'>{item.name}</span>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default HomeProjects