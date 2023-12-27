'use client'
import { internationalization } from "@/const/internationalization";
import { remoteConfig } from "@/utils/remote-config";
import { fetchAndActivate, getString } from "firebase/remote-config";
import Link from "next/link";
import { useState } from "react";

const HomeProjects = () => {
    const [lang, setLang] = useState<string>('rus')
    fetchAndActivate(remoteConfig)
    .then(() => {
        const lang = getString(remoteConfig, "lang")
        setLang(lang)
        // ...
    })
    .catch((err) => {
        // ...
    });
    const title = internationalization[lang].home.projects.title
    const description = internationalization[lang].home.projects.description
    const items = internationalization[lang].home.projects.items
    return (
        <div className="w-full h-fit border-y py-12 gap-12 flex flex-col">
            <section className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-4">
                <h1 className='md:text-4xl text-2xl font-bold text-accent-foreground'>{ title }</h1>
                <span className='text-base font-light text-muted-foreground'>{ description }</span>
            </section>
            <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-3 grid-rows-6 gap-6 h-full">
                {
                    items.map(item => 
                        <Link href={item.link} key={item.link}
                        className="w-full flex flex-col gap-4 justify-center items-center h-full min-h-[20rem] rounded-xl border hover:border-accent-foreground group transition-colors cursor-pointer overflow-hidden relative">
                            <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-muted to-transparent hidden group-hover:block opacity-50"></div>
                            <span className='text-4xl z-10 font-semibold text-accent-foreground'>{item.short}</span>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default HomeProjects