'use client'
import { internationalization } from "@/const/internationalization";
import { remoteConfig } from "@/utils/remote-config";
import { fetchAndActivate, getString } from "firebase/remote-config";
import { useState } from "react";

const HeroText = () => {
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
    const title = internationalization[lang].home.hero.title
    const titleArr = title.split(' ')
    const description = internationalization[lang].home.hero.description
    return (
        <>
            <h1 className='z-10 select-none text-3xl font-semibold text-center md:text-6xl text-accent-foreground'>
                {
                    titleArr.map((part, index) => {
                        if (index === 0) {
                            return (
                                <span key={part + index} className='relative w-fit h-fit px-2 pb-1 inline-block'>{part}
                                    <span style={{ left: 'calc((100% - 51px) / 2)' }} className="absolute -top-8 px-1 py-0.5 text-xs font-normal rounded-sm bg-muted">358x64</span>
                                    <div className="w-full h-[1px] bg-muted-foreground absolute top-[1.25px] left-0" />
                                    <div className="w-full h-[1px] bg-muted-foreground absolute bottom-[1.25px] left-0" />
                                    <div className="w-full h-[1px] bg-muted-foreground absolute bottom-[1.25px] left-0" />
                                    <div className="w-[1px] h-full bg-muted-foreground absolute bottom-0 left-[1.25px]" />
                                    <div className="w-[1px] h-full bg-muted-foreground absolute bottom-0 right-[1.25px]" />
                                    <div className="w-1 h-1 bg-accent-foreground top-0 left-0 absolute" />
                                    <div className="w-1 h-1 bg-accent-foreground top-0 right-0 absolute" />
                                    <div className="w-1 h-1 bg-accent-foreground bottom-0 left-0 absolute" />
                                    <div className="w-1 h-1 bg-accent-foreground bottom-0 right-0 absolute" />
                                </span>
                            )
                        }
                        return ' ' + part + ' '
                    })
                }
            </h1>
            <span className='text-center font-light text-muted-foreground'>{description}</span>
        </>
    )
}
/*
<h1 className='z-10 select-none text-3xl font-semibold text-center md:text-6xl text-accent-foreground'>
    <span className='relative w-fit h-fit px-2 pb-1 inline-block'>Творчество
        <span style={{ left: 'calc((358px - (51px / 2)) / 2)' }} className="absolute -top-8 px-1 py-0.5 text-xs font-normal rounded-sm bg-muted">358x64</span>
        <div className="w-full h-[1px] bg-muted-foreground absolute top-[1.25px] left-0" />
        <div className="w-full h-[1px] bg-muted-foreground absolute bottom-[1.25px] left-0" />
        <div className="w-full h-[1px] bg-muted-foreground absolute bottom-[1.25px] left-0" />
        <div className="w-[1px] h-full bg-muted-foreground absolute bottom-0 left-[1.25px]" />
        <div className="w-[1px] h-full bg-muted-foreground absolute bottom-0 right-[1.25px]" />
        <div className="w-1 h-1 bg-accent-foreground top-0 left-0 absolute" />
        <div className="w-1 h-1 bg-accent-foreground top-0 right-0 absolute" />
        <div className="w-1 h-1 bg-accent-foreground bottom-0 left-0 absolute" />
        <div className="w-1 h-1 bg-accent-foreground bottom-0 right-0 absolute" />
    </span>&nbsp;и производительность
</h1>
<span className='text-center font-light text-muted-foreground'>
    DM служит для расширения возможностей при работе, и поиске вдохновения, 
    здесь вы можете построить свои планы и вдохновиться на новые проекты.
</span>
*/
export default HeroText