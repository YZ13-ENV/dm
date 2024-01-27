import BigHeader from '@/components/widgets/headers/big'
import HomeProjects from '../../_components/home-projects'
import PostsSection from '../../_components/posts'
import Hero from '../../_components/hero'
import Footer from '@/components/shared/footer'
import Image from 'next/image'
import TeamSection from '../../_components/team'
import Line from '../../_components/line'

const page = () => {

    return (
        <>
            <BigHeader transparent absolute />
            <Hero />
            <div className="w-full h-fit top-6 fixed">
                <div className="w-fit h-fit p-1 z-50 rounded-full border px-4 flex items-center justify-center mx-auto bg-card">
                    <div className="w-fit h-9 px-5 flex items-center justify-center">
                        <span className="text-sm text-accent-foreground">Главная</span>
                    </div>
                    <div className="w-fit h-9 px-5 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Проекты</span>
                    </div>
                    <div className="w-fit h-9 px-5 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Команда</span>
                    </div>
                </div>
            </div>
            <HomeProjects />
            <Line />
            <TeamSection />
            <Line variant="primary" />
            <div className='relative'>
                <PostsSection />
                <Footer />
                <div className="w-full absolute bottom-0 left-0 h-full z-[-1]">
                    <div className="w-full absolute z-[-2] h-full bg-gradient-to-t from-background to-transparent" />
                    <Image fill src='/star-field-7.png' alt='grid-on-bottom' />
                </div>
            </div>
        </>
    )
}

export default page