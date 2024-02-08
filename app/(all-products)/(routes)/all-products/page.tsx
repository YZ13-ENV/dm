import HeaderSkeleton from "@/components/skeletons/header";
import dynamic from "next/dynamic";
import Footer from "@/components/shared/footer";
import HomeProjects from "@/app/(home)/_components/home-projects";
const Header = dynamic(() => import("@/components/widgets/headers/default"), {
  ssr: false,
  loading: () => <HeaderSkeleton transparent absolute />
});

const page = () => {
  return (
    <>
      <Header transparent absolute />
      <HomeProjects hideTitle={false} hideShowAll />
      <Footer />
    </>
  );
};

export default page;

