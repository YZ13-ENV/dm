'use client'
import { cn } from "@/lib/utils"
import { ElementRef, useEffect, useMemo, useRef, useState } from "react"
import Star from "./star"
import { format } from "@/helpers/format"

type Props = {
  starsCount?: number
}
const StarField = ({ starsCount=50 }: Props) => {
  const stars = useMemo(() => { return Array.from({ length: starsCount }).map((_, i) => i) }, [])
  const ref = useRef<ElementRef<'div'>>(null)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)
  useEffect(() => {
    const div = ref.current
    if (div) {
      const { offsetWidth, offsetHeight } = div
      setWidth(offsetWidth)
      setHeight(offsetHeight)
      setVisible(true)
    }
  },[ref])
  return (
    <div ref={ref} className={cn(
      visible ? 'opacity-100' : 'opacity-0',
      "absolute w-full h-full"
    )}>
      {
        stars.map(
          star => <Star key={'star-' + star + '-' + format.generateId(6)} width={width} height={height} index={star} />
        )
      }
    </div>
  )
}

export default StarField