import { default_api } from "@/api/default"
import DynamicList from "@/app/(projects)/_components/app-preview/dynamic-list"
import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi"

const AllPreview = async () => {
  const projects = await default_api.all()
  return (
    <>
      <div className="w-full grid lg:grid-cols-7 grid-cols-4 auto-rows-auto lg:max-w-5xl max-w-2xl gap-4 px-6">
        <DynamicList list={projects} />
      </div>
      <div className="w-full flex items-center justify-end lg:max-w-5xl max-w-2xl px-6 mx-auto">
        <Link
          href='/all'
          className="text-sm text-muted-foreground inline-flex gap-2 items-center hover:text-accent-foreground transition-colors"
        >
          Посмотреть все <BiRightArrowAlt size={16} />
        </Link>
      </div>
    </>
  )
}

export default AllPreview