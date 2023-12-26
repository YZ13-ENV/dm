import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import SettingsBlock from '../../_components/settings-block'

const page = () => {
    return (
        <div className='w-full flex flex-col'>
            <Separator />
            <div className="max-w-6xl w-full px-6 py-12 mx-auto">
                <h1 className='md:text-4xl text-2xl font-bold text-accent-foreground'>Настройки</h1>
            </div>
            <Separator />
            <div className="max-w-6xl w-full mx-auto flex md:flex-row flex-col items-start gap-6 md:py-12 py-6">
                <div className="w-full md:max-w-[200px] max-w-full shrink-0 h-fit px-6">
                    <span className='font-light text-sm px-3 w-full inline-flex items-center h-9 hover:bg-muted rounded-md cursor-pointer'>Основные</span>
                </div>
                <div className="w-full h-full flex flex-col px-6">
                    <Separator />
                    <SettingsBlock
                        name='Никнейм'
                        description='Необязательно, но рекомендуется.'
                    >
                        <Input placeholder='Не указан' />
                        <div className="w-full h-9 flex items-center rounded-md border">
                            <span className='px-2 text-sm text-muted-foreground'>darkmaterial.space/</span>
                            <Separator orientation='vertical' />
                            <Input className='!border-0 !ring-0' value='yz13' />
                        </div>
                    </SettingsBlock>
                    <SettingsBlock
                        direction='horizontal'
                        name='Аватар'
                        description='Необязательно, но рекомендуется.'
                    >
                        <div className='w-12 h-12 rounded-full ml-auto bg-muted' />
                    </SettingsBlock>
                    <SettingsBlock
                        name='Позиция'
                        description='Укажите свою позицию (Frontend-developer, Designer).'
                    >
                        <Input placeholder='Не указан' />
                    </SettingsBlock>
                </div>
            </div>
        </div>
    )
}

export default page