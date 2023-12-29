import SettingsBlock from '.'
import Avatar from '@/components/shared/avatar'


type Props = {
    avatarURL: string
}
const AvatarBlock = ({ avatarURL }: Props) => {
    return (
        <SettingsBlock
            direction='horizontal'
            name='Аватар'
            description='Необязательно, но рекомендуется.'
        >
            {
                avatarURL
                ? <Avatar className='ml-auto' src={avatarURL} size={48} />
                : <div className='w-12 h-12 rounded-full ml-auto bg-muted' />
            }
        </SettingsBlock>
    )
}

export default AvatarBlock