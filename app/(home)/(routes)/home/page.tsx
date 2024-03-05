import dynamic from "next/dynamic";
import MainSection from "../../_components/sections/main";
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
        {/* <Link href='/' className="inline-flex items-center gap-2"> */}
        {/* <Image src="/dm-star-dark.svg" width={44} height={44} alt='app-logo' /> */}
        {/* </Link> */}
        <div className="flex items-center gap-2">
          <UserSection />
        </div>
      </header>
      <main style={{ minHeight: "calc(100dvh - 64px)" }} className="w-full">
        <MainSection />
        {/* <FrameSection /> */}
        {/* <BlogSection /> */}
        {/* <TeamSection /> */}
      </main>
    </>
  )
}
