import { Separator } from '@/components/ui/separator'
import { cookies } from 'next/headers'
import { user as userAPI } from '@/api/user'
import DisplayNameBlock from '../../_components/settings-block/diplay-name-block'
import NicknameBlock from '../../_components/settings-block/nickname-block'
import AvatarBlock from '../../_components/settings-block/avatar-block'
import PositionBlock from '../../_components/settings-block/position-block'
import EmailBlock from '../../_components/settings-block/email-block'

const page = async() => {
    const cookiesList = cookies()
    const uidCookie = cookiesList.get('uid')
    const uid = uidCookie ? uidCookie.value : null
    const user = uid ? await userAPI.byId.short(uid) : null
    if (!user) return (
        <div className='w-full flex flex-col'>
            <div className="max-w-5xl w-full mx-auto flex items-center justify-center h-full">
                <span className='text-center'>Необходимо авторизоваться для изменения настроек профиля</span>
            </div>
        </div>
    )
    return (
        <div className='w-full flex flex-col'>
            <Separator />
            <div className="max-w-6xl w-full px-6 py-12 mx-auto">
                <h1 className='md:text-4xl text-2xl font-bold text-accent-foreground'>Настройки</h1>
            </div>
            <Separator />
            <div className="settings-wrapper">
                <div className="w-full md:max-w-[200px] max-w-full shrink-0 h-fit px-6">
                    <span className='font-light text-sm px-3 w-full inline-flex items-center h-9 hover:bg-muted rounded-md cursor-pointer'>Основные</span>
                </div>
                <div className="w-full h-full flex flex-col px-6">
                    <NicknameBlock uid={user.uid} nickname={user.nickname || ''} />
                    <DisplayNameBlock nickname={user.nickname || user.uid} displayName={user.displayName} />
                    <EmailBlock email={user.email} />
                    <AvatarBlock avatarURL={user.photoUrl} />
                    <PositionBlock position={user.position || ''} />
                </div>
            </div>
        </div>
    )
}

export default page