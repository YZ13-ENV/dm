import Image from 'next/image'
import { cdn } from 'api'

type Props = {
    size?: number
}
const DmMark = ({ size=32 }: Props) => {
    return (
        <Image src={cdn('/dm/icons/DM-dark.svg')} width={size} height={size} alt="dm-logo" />
    )
}

export default DmMark