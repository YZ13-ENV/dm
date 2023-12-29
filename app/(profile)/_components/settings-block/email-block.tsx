import { Input } from "@/components/ui/input"
import SettingsBlock from "."


type Props = {
    email: string
}
const EmailBlock = ({ email }: Props) => {
    return (
        <SettingsBlock
            name='Почта'
            description='Нельзя изменить'
        >
            <Input placeholder='Укажите почту' disabled readOnly value={email} />
        </SettingsBlock>
    )
}

export default EmailBlock