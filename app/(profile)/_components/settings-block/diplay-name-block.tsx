'use client'
import { Button } from "@/components/ui/button"
import SettingsBlock from "."
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { auth } from "@/utils/app"
import { updateProfile } from "firebase/auth"
import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { BiLoaderAlt } from "react-icons/bi"
import { user as userAPI } from '@/api/user'

type Props = {
    displayName: string
    nickname?: string
}
const DisplayNameBlock = ({ displayName, nickname }: Props) => {
    const [user] = useAuthState(auth)
    const [loading, setLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>(user && user.displayName ? user.displayName : displayName)
    const isSame = user ? user.displayName === name : displayName === name
    const updateDisplayName = async() => {
        if (user && !isSame) {
            setLoading(true)
            await updateProfile(user, { displayName: name })
            await userAPI.byId.update(user.uid, { displayName: name })
            setLoading(false)
        }
    }
    return (
        <SettingsBlock
            name='Отображаемое имя'
            description='Имя под которым вас будут узнавать другие пользователи'
        >
            <Input placeholder='Укажите имя' value={name} onChange={e => setName(e.target.value)} />
            <div className="w-full h-9 flex items-center rounded-md border">
                <span className='px-2 text-sm text-muted-foreground'>@{ nickname || '' }</span>
                <Separator orientation='vertical' />
                <Input className='!border-0 !ring-0' readOnly value={name} />
            </div>
            {
                isSame === false ?
                <div className="w-full h-fit flex items-center justify-end">
                    <Button onClick={updateDisplayName} disabled={!user || isSame || loading} className="gap-2">
                        { loading && <BiLoaderAlt className='animate-spin' /> }
                        Сохранить
                    </Button>
                </div>
                : <></>
            }
        </SettingsBlock>
    )
}

export default DisplayNameBlock