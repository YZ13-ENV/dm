"use client"
import { DocProject } from '@/api/default'
import { useMediaQuery } from 'react-responsive'
import Project from './project'
type Props = {
  list: DocProject[]
}
const DynamicList = ({ list }: Props) => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  return (
    <>
      {
        list
          .sort((a, b) => a.createAt - b.createAt)
          .filter((_, i) => isMobile
            ? i <= 2
            : isTablet
              ? i <= 3
              : i <= 6
          )
          .map(project => <Project key={project.doc_id} project={project} />)
      }
    </>
  )
}

export default DynamicList