'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useDebounceEffect } from "ahooks"
import { user } from "api"
import { useState } from "react"
import { BiCheck, BiLoaderAlt, BiX } from "react-icons/bi"
import SettingsBlock from "."

type Props = {
    uid: string
    nickname: string
}
const NicknameBlock = ({ nickname, uid }: Props) => {
    const [name, setName] = useState<string>(nickname || '')
    const [loading, setLoading] = useState<boolean>(false)
    const [exist, setExist] = useState<boolean>(true)
    const isSame = name === nickname
    const checkNickname = async () => {
        const isExist = await user.byNick.short(name, true) as boolean | null
        if (isExist === true) setExist(true)
        setExist(false)
    }
    const createNick = async () => {
        setLoading(true)
        if (nickname.length > 0) await user.byNick.delete(nickname)
        const reference = await user.byNick.create(name, uid)
        if (reference) {
            setLoading(false)
            setExist(true)
        } else setLoading(false)
    }
    useDebounceEffect(() => {
        if (!isSame && name.length !== 0) checkNickname()
    }, [name, isSame], { wait: 2000 })
    return (
        <SettingsBlock
            name='Никнейм'
            description='Имя под которым вы можете получить доступ к своим данным быстрее, чем с UID'
        >
            <div className="w-full h-9 flex items-center rounded-md border">
                <Input placeholder='Укажите ник' className='!border-0 !ring-0' onChange={e => setName(e.target.value)} value={name} />
                <div className="px-2">
                    {
                        loading
                            ? <BiLoaderAlt size={18} className='text-muted-foreground animate-spin' />
                            : exist
                                ? <BiX size={18} className='text-muted-foreground' />
                                : <BiCheck size={18} className='text-muted-foreground' />
                    }
                </div>
            </div>
            <div className="w-full h-9 flex items-center rounded-md border">
                <span className='px-2 text-sm text-muted-foreground'>darkmaterial.space/</span>
                <Separator orientation='vertical' />
                <Input className='!border-0 !ring-0' readOnly value={name} />
            </div>
            {
                !exist && !isSame ?
                    <div className="w-full h-fit flex items-center justify-end">
                        <Button onClick={createNick} disabled={!user || exist || loading} className="gap-2">
                            {loading && <BiLoaderAlt className='animate-spin' />}
                            Сохранить
                        </Button>
                    </div>
                    : <></>
            }
        </SettingsBlock>
    )
}

export default NicknameBlock