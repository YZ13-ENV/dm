import { Input } from '@/components/ui/input'
import SettingsBlock from '.'


type Props = {
    position: string
}
const PositionBlock = ({ position }: Props) => {
    return (
        <SettingsBlock
            name='Позиция'
            description='Укажите свою позицию (Frontend-developer, Designer).'
        >
            <Input placeholder='Укажите вашу позицию' readOnly value={position} />
        </SettingsBlock>
    )
}

export default PositionBlock