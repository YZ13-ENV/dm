'use client'
import { useInterval } from "ahooks";
import { DateTime } from "luxon"
import { memo, useState } from "react"

const StatusBar = () => {
    const [date, setDate] = useState<DateTime>(DateTime.now().setLocale('ru'))
    useInterval(() => {
        setDate(DateTime.now().setLocale('ru'))
    }, 1000);
    return (
        <div className="w-full h-fit flex items-center justify-between">
            <span className='text-2xl text-muted-foreground font-bold'>Сегодня</span>
            <div className="w-fit h-fit flex items-center gap-2">
                <span className='text-2xl font-bold capitalize'>{ date.toFormat('dd MMMM') }</span>
                <span className='text-2xl font-bold'>|</span>
                <span className='text-2xl font-bold'>{ date.toFormat('HH:mm') }</span>
            </div>
        </div>
    )
}

export default memo(StatusBar)