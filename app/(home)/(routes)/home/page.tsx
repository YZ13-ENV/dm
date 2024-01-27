import BigHeader from '@/components/widgets/headers/big'
import HomeProjects from '../../_components/home-projects'
import PostsSection from '../../_components/posts'
import Hero from '../../_components/hero'
import Footer from '@/components/shared/footer'
import Image from 'next/image'
import TeamSection from '../../_components/team'
import Line from '../../_components/line'
import NavDock from '../../_components/nav-dock'

const page = () => {

    return (
        <>
            <BigHeader transparent absolute />
            <Hero />
            <NavDock />
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