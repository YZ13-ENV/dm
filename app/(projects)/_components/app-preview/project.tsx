import { DocProject } from "@/api/default"
import Image from "next/image"
import Link from "next/link"

type Props = {
  project: DocProject
}
const Project = ({ project }: Props) => {
  return (
    <div className="relative w-full aspect-square flex flex-col items-center justify-center gap-2 outline rounded-2xl outline-transparent transition-all hover:outline-primary cursor-pointer hover:outline-offset-2">
      {
        project.iconUrl
          ? <Image className="aspect-square" src={project.iconUrl} width={44} height={44} alt='project-icon' />
          : <div className="w-11 aspect-square rounded-full bg-muted" />
      }
      <div className="w-full flex flex-col items-center justify-center">
        <span className="text-base text-center line-clamp-1 capitalize">{project.name}</span>
        {
          project.link &&
          <Link
            href={project.link}
            className="w-full h-full rounded-2xl absolute top-0 left-0 z-10">
          </Link>
        }
      </div>
    </div>
  )
}

export default Project