import BigHeader from '@/components/widgets/headers/big'
import HomeProjects from '../../_components/home-projects'
import PostsSection from '../../_components/posts'
import Hero from '../../_components/hero'
import Footer from '@/components/shared/footer'
import grid from '@/public/grid.webp'
import Image from 'next/image'

const page = () => {

    return (
        <>
            <BigHeader transparent absolute />
            <Hero />
            <HomeProjects />
            <div className='relative'>
                <PostsSection />
                <Footer />
                <div className="w-full absolute bottom-0 left-0 h-full z-[-1]">
                    <div className="w-full absolute z-[-2] h-full bg-gradient-to-b from-background to-transparent" />
                    <Image fill className='object-cover z-[-3] opacity-50' src={grid} alt='grid-on-bottom' />
                </div>
            </div>
        </>
    )
}

export default page