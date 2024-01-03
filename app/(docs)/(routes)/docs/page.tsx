import { Separator } from '@/components/ui/separator'
import Header from '@/components/widgets/headers/default'
import Link from 'next/link'
import React from 'react'
import SideGroup from '../../_components/side/side-group'
import { fundamentals } from '../../_components/const/fundamentals'
import SideElement from '../../_components/side/side-element'

const page = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Header transparent />
            </div>
            <nav className='max-w-7xl w-full mx-auto h-full flex items-center gap-4 px-6 py-2'>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>Основы</Link>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>База данных</Link>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>Библиотеки</Link>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>API</Link>
                <Link href='/docs' className='text-sm text-muted-foreground hover:text-accent-foreground'>Все</Link>
            </nav>
            <Separator />
            <div className='max-w-7xl w-full mx-auto h-full flex items-start pt-6'>
                <aside className='px-6 shrink-0 w-64 h-full gap-4  flex flex-col'>
                    {
                        fundamentals.map((item, index) => {
                            if (item.type === 'group') return <SideGroup key={'group-' + index} group={item} />
                            if (item.type === 'single') return <SideElement key={'single-' + index} element={item} />
                            return null
                        })
                    }
                </aside>
                <section className='w-full h-full px-6 flex flex-col gap-6'>

                    <Separator />
                </section>
                <div className='w-64 shrink-0 h-full px-6'></div>
            </div>
        </>
    )
}

export default page