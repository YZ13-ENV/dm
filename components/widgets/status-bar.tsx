'use client'
import { internationalization } from "@/const/internationalization";
import { app } from "@/utils/app";
import { useInterval } from "ahooks";
import { fetchAndActivate, getRemoteConfig, getString } from "firebase/remote-config";
import { DateTime } from "luxon"
import { memo, useEffect, useState } from "react"

const StatusBar = () => {
    const [lang, setLang] = useState<string>('rus')
    const today = internationalization[lang].home.posts.title
    const locale = internationalization[lang].home.posts.locale
    const [date, setDate] = useState<DateTime>(DateTime.now().setLocale(locale))
    useInterval(() => {
        setDate(DateTime.now().setLocale(locale))
    }, 1000);
    useEffect(() => {
        const remoteConfig = getRemoteConfig(app)
        remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
        fetchAndActivate(remoteConfig)
        .then(() => {
            const lang = getString(remoteConfig, "lang")
            setLang(lang)
        })
    },[])
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