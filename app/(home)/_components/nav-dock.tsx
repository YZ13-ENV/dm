'use client'
import { cn } from "@/lib/utils"
import { useDebounceEffect, useInViewport } from "ahooks"
import { ElementRef, useEffect, useRef, useState } from "react"

const NavDock = () => {
  const [width, setWidth] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)
  const ref = useRef<ElementRef<'div'>>(null)
  const [ hero_in_iew ] = useInViewport(document?.getElementById("hero"))
  const [ projects_in_iew ] = useInViewport(document?.getElementById("projects"))
  const [ team_in_iew ] = useInViewport(document?.getElementById("team"))
  const [ posts_in_iew ] = useInViewport(document?.getElementById("posts"))
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  useEffect(() => {
    const div = ref.current
    if (div) {
      const { clientWidth } = div
      setWidth(clientWidth)
      setVisible(true)
    }
  },[ref])
  useDebounceEffect(() => {
    // console.log(selectedSection, hero_in_iew, projects_in_iew, team_in_iew, posts_in_iew)
    if (hero_in_iew) {
      setSelectedSection('hero')
    } else if (projects_in_iew) {
      setSelectedSection('projects')
    } else if (team_in_iew) {
      setSelectedSection('team')
    } else setSelectedSection('posts')
  },[hero_in_iew, projects_in_iew, team_in_iew, posts_in_iew], { wait: 500 })
  const scrollTo = (id: string) => {
    if (document) {
      const target = document
      .getElementById(id)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }
  return (
    <div ref={ref} style={{ left: `calc(50% - (${width}px / 2))`, opacity: visible ? 1 : 0 }}
    className={cn(
      selectedSection === 'posts' ? 'bottom-16' : 'bottom-6',
      "w-fit mx-auto fixed h-fit p-1 z-50 rounded-full border px-4 backdrop-blur flex items-center justify-center bg-gradient-to-r from-transparent via-card to-transparent transition-all"
    )}>
        <div className="w-fit h-9 px-5 flex items-center justify-center">
            <span onClick={() => scrollTo("hero")}
            className={cn(
              selectedSection === 'hero' ? 'text-accent-foreground' : 'text-muted-foreground',
              "cursor-pointer text-sm transition-colors"
            )}>Главная</span>
        </div>
        <div className="w-fit h-9 px-5 flex items-center justify-center">
            <span onClick={() => scrollTo("projects")}
            className={cn(
              selectedSection === 'projects' ? 'text-accent-foreground' : 'text-muted-foreground',
              "cursor-pointer text-sm transition-colors"
            )}>Проекты</span>
        </div>
        <div className="w-fit h-9 px-5 flex items-center justify-center">
            <span onClick={() => scrollTo("team")}
            className={cn(
              selectedSection === 'team' ? 'text-accent-foreground' : 'text-muted-foreground',
              "cursor-pointer text-sm transition-colors"
            )}>Команда</span>
        </div>
        <div className="w-fit h-9 px-5 flex items-center justify-center">
            <span onClick={() => scrollTo("posts")}
            className={cn(
              selectedSection === 'posts' ? 'text-accent-foreground' : 'text-muted-foreground',
              "cursor-pointer text-sm transition-colors"
            )}>Блог</span>
        </div>
    </div>
  )
}

export default NavDock