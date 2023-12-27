'use client'
import { internationalization } from "@/const/internationalization";
import { remoteConfig } from "@/utils/remote-config";
import { useInterval } from "ahooks";
import { fetchAndActivate, getString } from "firebase/remote-config";
import { DateTime } from "luxon"
import { memo, useState } from "react"

const StatusBar = () => {
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

    const today = internationalization[lang].home.posts.title
    const locale = internationalization[lang].home.posts.locale
    const [date, setDate] = useState<DateTime>(DateTime.now().setLocale(locale))
    useInterval(() => {
        setDate(DateTime.now().setLocale(locale))
    }, 1000);
    return (
        <div className="w-full h-fit flex items-center justify-between">
            <span className='text-2xl text-muted-foreground font-bold'>{today}</span>
            <div className="w-fit h-fit flex items-center gap-2">
                <span className='text-2xl font-bold capitalize'>{ date.setLocale(locale).toFormat('dd MMMM') }</span>
                <span className='text-2xl font-bold'>|</span>
                <span className='text-2xl font-bold'>{ date.setLocale(locale).toFormat('HH:mm') }</span>
            </div>
        </div>
    )
}

export default memo(StatusBar)