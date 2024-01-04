import Link from 'next/link'
import { maps } from './docs-maps'
import { docs } from '@/helpers/docs'
import { DocsNav } from '@/types/docs'

const DocsNav = () => {
    const navLinks: DocsNav[] = maps.map(map => {
        if (map.root) {
            return {
                name: map.name,
                link: docs(map.id)
            }
        } else return null
    })
    .filter(map => map ? true : false) as DocsNav[]
    return (
        <div className='w-full h-fit border-b'>
            <nav className='max-w-7xl w-full mx-auto h-full flex items-center gap-4 px-6 py-2'>
                {
                    navLinks.map(item => 
                        <Link href={item.link} key={'nav-' + item.link} className='text-sm text-muted-foreground hover:text-accent-foreground'>{item.name}</Link>
                    )
                }
                {/* 
                    <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>База данных</Link>
                    <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>Библиотеки</Link>
                    <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>API</Link>
                    <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>Все</Link> 
                */}
            </nav>
        </div>
    )
}

export default DocsNav