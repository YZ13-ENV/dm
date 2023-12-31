'use client'
import { notifications } from "@/api/notifications"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { BiLoaderAlt } from "react-icons/bi"

const FeedBack = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const disabled = text.length < 3
    const clean = () => {
        setText('')
        setOpen(false)
    }
    const sendFeedback = async() => {
        if (!disabled) {
            setLoading(true)
            await notifications.push(text)
            setLoading(false)
            clean()
        }
    }
    return (
        <Popover open={open} onOpenChange={state => setOpen(state)}>
            <PopoverTrigger asChild>
                <Button variant='outline'>Обратная связь</Button>
            </PopoverTrigger>
            <PopoverContent className='min-h-[16rem] max-h-[90vh] flex flex-col gap-4 justify-between'>
                <div className="w-full h-fit rounded-lg bg-background p-3">
                    <textarea className="w-full h-full min-h-[140px] max-h-[770px] rounded-lg outline-none text-sm resize-y bg-transparent" 
                    rows={7} placeholder="Введите здесь..." value={text} onChange={e => setText(e.target.value)} />
                </div>
                <div className="w-full h-fit flex items-center justify-end shrink-0">
                    <Button size='sm' className="gap-2" onClick={sendFeedback} disabled={disabled}>
                        { loading && <BiLoaderAlt className='animate-spin' /> }
                        Отправить
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default FeedBack