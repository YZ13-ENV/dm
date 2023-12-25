import { config } from '@/app.config'
import RemoteServerLogo from './remote/remote-logo-server'

type Props = {
    size?: number
}
const DmMark = ({ size=32 }: Props) => {
    return (
        <RemoteServerLogo dark={config.remote.logo.dark} light={config.remote.logo.light} size={size} alt="dm-logo" />
    )
}

export default DmMark