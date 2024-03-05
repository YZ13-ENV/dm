import AllPosts from "./posts-all"

const BlogSection = () => {
  return (
    <section className="w-full h-fit py-6">
      <div className="lg:max-w-5xl max-w-2xl mx-auto w-full p-6 flex items-center gap-2">
        {/* <Image src="/frame-dark.svg" width={32} height={22} alt='frame-section-logo' /> */}
        <h1 className="!text-2xl"><span className="text-muted-foreground">Последние посты от</span> YZ13</h1>
      </div>
      <div className="mx-auto lg:max-w-5xl max-w-2xl px-6">
        <AllPosts />
      </div>
    </section>
  )
}

export default BlogSection