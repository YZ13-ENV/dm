import { DocProject } from "@/api/default"
import Image from "next/image"
import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi"

type Props = {
  project: DocProject
}
const Project = ({ project }: Props) => {
  return (
    <div className="w-full aspect-square flex flex-col items-center justify-center gap-2 outline rounded-2xl outline-transparent transition-all hover:outline-primary cursor-pointer hover:outline-offset-2">
      {
        project.iconUrl
          ? <Image className="aspect-square" src={project.iconUrl} width={44} height={44} alt='project-icon' />
          : <div className="w-11 aspect-square rounded-full bg-muted" />
      }
      <div className="w-full flex flex-col items-center justify-center">
        <span className="text-base text-center line-clamp-1 capitalize">{project.name}</span>
        <Link href="/" className="text-muted-foreground text-xs gap-1 transition-colors hover:text-accent-foreground inline-flex items-center">Перейти <BiRightArrowAlt size={14} /></Link>
      </div>
    </div>
  )
}

export default Project