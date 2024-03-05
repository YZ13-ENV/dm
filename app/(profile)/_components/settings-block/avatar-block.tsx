'use client'
import Avatar from '@/components/shared/avatar'
import DropZone from '@/components/shared/drop-zone'
import { cdn } from '@/helpers/cdn'
import { auth } from '@/utils/app'
import { file as fileAPI, user as userAPI } from 'api'
import { useAuthState } from 'react-firebase-hooks/auth'
import SettingsBlock from '.'

type Props = {
    avatarURL: string
}
const AvatarBlock = ({ avatarURL }: Props) => {
    const [user] = useAuthState(auth)
    const uploadAvatarAndSave = async (file: File) => {
        if (user) {
            if (user.photoURL) await fileAPI.upload.delete(user.photoURL)
            const link = `users/${user.uid}/avatar/${file.name}`
            const url = await fileAPI.upload.file(link, file)
            if (url) {
                await userAPI.byId.updateProfile(user.uid, { photoURL: cdn(url) })
                await user.reload()
            }
        }
    }
    return (
        <SettingsBlock
            direction='horizontal'
            name='Аватар'
            description='Необязательно, но рекомендуется.'
        >
            <div className="ml-auto w-12 aspect-square rounded-full relative">
                <Avatar src={avatarURL} size={48} />
                <DropZone disabled={!user} onFile={file => uploadAvatarAndSave(file)}
                    className='z-20 absolute top-0 w-full aspect-square' />
            </div>
        </SettingsBlock>
    )
}

export default AvatarBlock