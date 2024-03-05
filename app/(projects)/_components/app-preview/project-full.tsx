import { DocProject } from "@/api/default";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TbDeviceDesktop, TbDeviceMobile, TbDeviceTablet } from "react-icons/tb";

type Props = {
  project: DocProject
}
const FullProject = ({ project }: Props) => {
  const { desktop, mobile, tablet } = project.access
  return (
    <div className={cn(
      "outline outline-2 hover:bg-card rounded-xl outline-transparent transition-all hover:outline-primary cursor-pointer hover:outline-offset-2",
      "w-full h-full flex items-start gap-2.5 p-4"
    )}>
      {
        project.iconUrl
          ? <Image src={project.iconUrl} width={28} height={28} className="aspect-square" alt='project-icon' />
          : <div className="rounded-lg bg-card border w-7 aspect-square" />
      }
      <div className="w-full h-full flex flex-col gap-2">
        <span className="text-lg text-accent-foreground capitalize font-medium">{project.name}</span>
        {project.description && <span className="text-sm line-clamp-4 text-muted-foreground">{project.description}</span>}
        <div className="flex items-center justify-start gap-2 mt-2">
          <TbDeviceDesktop className={desktop ? "text-accent-foreground" : "text-muted"} size={14} />
          <TbDeviceTablet className={tablet ? "text-accent-foreground" : "text-muted"} size={14} />
          <TbDeviceMobile className={mobile ? "text-accent-foreground" : "text-muted"} size={14} />
        </div>
      </div>
    </div>
  )
}

export default FullProject