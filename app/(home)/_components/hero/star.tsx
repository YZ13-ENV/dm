import { format } from '@/helpers/format'
import { motion } from 'framer-motion'

type Props = {
  width: number
  height: number
  index: number
}
const Star = ({ index, height, width }: Props) => {
  const delay = format.randomNum(0, 10)
  const brightLevel = format.randomNum(0, 2)
  const duration = format.randomNum(1, 3)
  const size = format.randomNum(1, 3)
  const levels = [
    { min: .25, max: .5 },
    { min: .5, max: .7 },
    { min: .6, max: 1 }
  ]
  return (
    <motion.div initial={{ opacity: levels[brightLevel].min }} animate={{ opacity: levels[brightLevel].max }}
    transition={{ repeat: Infinity, repeatType: 'mirror', duration: duration, delay: delay }}
    key={'star-' + index} style={{
      width: `${size}px`, height: `${size}px`,
      top: format.randomNum(0 + 10, height - 10),
      left: format.randomNum(0 + 10, width - 10)
    }}
    className="absolute w-0.5 h-0.5 rounded-full bg-primary" />
  )
}

export default Star