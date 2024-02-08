import dynamic from "next/dynamic";
import HeaderSkeleton from "@/components/skeletons/header";
import TeamSection from "@/app/(home)/_components/team/team";
import Footer from "@/components/shared/footer";
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