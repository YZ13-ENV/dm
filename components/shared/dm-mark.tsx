import { config } from '@/app.config'
import RemoteServerLogo from './remote/remote-logo-server'

const DmMark = () => {
    return (
        <RemoteServerLogo dark={config.remote.logo.dark} light={config.remote.logo.light} size={32} alt="dm-logo" />
    )
}

export default DmMark