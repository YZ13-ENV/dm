import dynamic from "next/dynamic";
import BlogSection from "../../_components/sections/blog";
import FrameSection from "../../_components/sections/frame";
import MainSection from "../../_components/sections/main";
import ProjectsSection from "../../_components/sections/projects";
import TeamSection from "../../_components/sections/team";
const UserSection = dynamic(() => import("@/components/widgets/headers/user-section"), {
  ssr: false,
  loading: () => <div className="w-fit h-fit flex items-center gap-2">
    <div className="w-9 rounded-full aspect-square bg-muted" />
    <div className="w-9 rounded-full aspect-square bg-muted" />
    <div className="w-9 rounded-full aspect-square bg-muted" />
  </div>
});

export default function Home() {
  return (
    <>
      <header className="h-16 w-full px-6 flex items-center justify-end">
        <div className="flex items-center gap-2">
          <UserSection />
        </div>
      </header>
      <main style={{ minHeight: "calc(100dvh - 64px)" }} className="w-full">
        <MainSection />
        <ProjectsSection />
        <FrameSection />
        <BlogSection />
        <TeamSection />
      </main>
    </>
  )
}
