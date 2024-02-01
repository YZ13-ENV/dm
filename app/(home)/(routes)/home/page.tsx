import BigHeader from '@/components/widgets/headers/big'
import HomeProjects from '../../_components/home-projects'
import PostsSection from '../../_components/posts'
import Hero from '../../_components/hero/hero'
import Footer from '@/components/shared/footer'
import TeamSection from '../../_components/team/team'
import Line from '../../_components/line'
import NavDock from '../../_components/nav-dock'
import StarField from '../../_components/hero/star-field'

const page = () => {

    return (
        <>
            <BigHeader transparent absolute />
            <Hero />
            {
                process.env.NODE_ENV !== 'development' &&
                <NavDock />
            }
            <div className="w-full h-fit relative">
                <StarField starsCount={350} />
                <HomeProjects />
                <Line />
                <TeamSection />
            </div>
            <Line variant="primary" />
            <div className='relative w-full min-h-screen'>
                <StarField starsCount={350} />
                <PostsSection />
                <Footer />
            </div>
        </>
    )
}

export default page