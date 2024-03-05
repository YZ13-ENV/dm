import { default_api } from "@/api/default"
import Image from "next/image"
import Link from "next/link"
import { ProjectsGrid } from "ui"
import FullProject from "../../_components/app-preview/project-full"

const page = async () => {
  const projects = await default_api.all()
  return (
    <>
      <header className="max-w-4xl mx-auto h-16 w-full px-6 flex items-center justify-between">
        <Link href='/'>
          <Image src="/dm-star-dark.svg" width={32} height={32} alt='app-logo' />
        </Link>
        <ProjectsGrid />
      </header>
      <div className="max-w-4xl mx-auto w-full px-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-rows-auto gap-0 py-12">
        {
          projects
            .sort((a, b) => a.createAt - b.createAt)
            .map(project => <FullProject key={project.doc_id} project={project} />)
        }
      </div>
    </>
  )
}

export default page