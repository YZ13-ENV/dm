import TeamSection from "@/app/(home)/_components/sections/team";
import Footer from "@/components/shared/footer";
import HeaderSkeleton from "@/components/skeletons/header";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/widgets/headers/default"), {
  ssr: false,
  loading: () => <HeaderSkeleton transparent absolute />
});

const page = () => {
  return (
    <>
      <Header transparent absolute />
      <TeamSection />
      <Footer />
    </>
  )
}

export default page