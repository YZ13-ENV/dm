'use client'
import { Input } from '@/components/ui/input'
import SettingsBlock from '.'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/utils/app'
import { useState } from 'react'
import { user as userAPI } from '@/api/user'
import { Button } from '@/components/ui/button'
import { BiLoaderAlt } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

type Props = {
    position: string
}
const PositionBlock = ({ position }: Props) => {
    const [user] = useAuthState(auth)
    const [loading, setLoading] = useState<boolean>(false)
    const [pos, setPos] = useState<string>(position || '')
    const isSame = position === pos
    const { refresh } = useRouter()
    const updatePosition = async() => {
        if (user) {
            setLoading(true)
            await userAPI.byId.update(user.uid, { position: pos })
            setLoading(false)
            await user.reload()
            refresh()
        }
    }
    return (
        <SettingsBlock
            name='Позиция'
            description='Укажите свою позицию (Frontend-developer, Designer).'
        >
            <Input placeholder='Укажите вашу позицию' onChange={e => setPos(e.target.value)} value={pos} />
            {
                !isSame ? 
                <div className="w-full h-fit flex items-center justify-end">
                    <Button onClick={updatePosition} disabled={!user || isSame || loading} className="gap-2">
                        { loading && <BiLoaderAlt className='animate-spin' /> }
                        Сохранить
                    </Button>
                </div>
                : <></>
            }
        </SettingsBlock>
    )
}

export default PositionBlock