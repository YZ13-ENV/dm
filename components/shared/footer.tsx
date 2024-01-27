import Link from "next/link"
import DmMark from "./dm-mark"

const Footer = () => {
  return (
    <footer className="w-full h-fit">
      <div className={"max-w-7xl mx-auto w-full h-fit flex flex-col gap-6 p-6"}>
          <div className="w-full h-fit gap-4 flex items-center justify-between">
              <DmMark size={32} />
              <div className='flex items-center justify-center gap-4 flex-wrap'>
                  <Link href='/all-products' className='text-muted-foreground text-sm'>Все проекты</Link>
                  <Link href='/team' className='text-muted-foreground text-sm'>Команда</Link>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                  <div className="w-5 h-5 rounded-md bg-muted" />
                  <div className="w-5 h-5 rounded-md bg-muted" />
                  <div className="w-5 h-5 rounded-md bg-muted" />
                  <div className="w-5 h-5 rounded-md bg-muted" />
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer