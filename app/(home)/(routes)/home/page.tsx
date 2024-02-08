import HomeProjects from '../../_components/home-projects'
import PostsSection from '../../_components/posts'
import Hero from '../../_components/hero/hero'
import Footer from '@/components/shared/footer'
import TeamSection from '../../_components/team/team'
import Line from '../../_components/line'
import NavDock from '../../_components/nav-dock'
import StarField from '../../_components/hero/star-field'
import HeaderSkeleton from "@/components/skeletons/big-header";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/widgets/headers/big"), {
  ssr: false,
  loading: () => <HeaderSkeleton absolute />
});
const page = () => {

    return (
        <>
            <Header transparent absolute hideLogo />
            <Hero />
            {
                process.env.NODE_ENV !== 'development' &&
                <NavDock />
            }
            <div className="relative w-full h-fit">
                <StarField starsCount={50} />
                <HomeProjects />
                <Line />
                <TeamSection />
            </div>
            <Line variant="primary" />
            <div className='relative w-full min-h-screen'>
                <StarField starsCount={150} />
                <PostsSection />
                <Footer />
            </div>
        </>
    )
}

export default page