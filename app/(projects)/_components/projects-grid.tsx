import { default_api } from "api"
import { unstable_noStore } from "next/cache"
import FullProject from "./app-preview/project-full"

const ProjectsAppGrid = async () => {
  unstable_noStore()
  const projects = await default_api.all()
  return (
    <div className="mx-auto w-full px-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-rows-auto gap-0 py-12">
      {
        projects
          .sort((a, b) => a.createAt - b.createAt)
          .map(project => <FullProject key={project.doc_id} project={project} />)
      }
    </div>
  )
}

export default ProjectsAppGrid