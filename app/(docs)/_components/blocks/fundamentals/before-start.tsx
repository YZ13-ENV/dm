import { MDXRemote } from 'next-mdx-remote/rsc'
import { BiUser, BiUserPlus } from 'react-icons/bi'

const BeforeStart = () => {
    return (
        <div className='w-full h-fit flex flex-col gap-6'>

            <MDXRemote source={`
                ## Перед тем как вы начнете

                Вам необходим аккаунт **DM Family**
            `} />

            <div className="w-full h-fit flex flex-col items-center justify-center gap-2">
                <div className='w-full h-fit border rounded-lg gap-2 flex flex-col p-4 hover:bg-card hover:border-primary cursor-pointer'>
                    <BiUserPlus size={24} />
                    <span className='font-semibold text-accent-foreground'>Зарегистрироваться</span>
                    <span className='text-muted-foreground'>
                        Если у вас ещё нет аккаунта DM Family, <br />
                        создайте новый
                    </span>
                </div>
                <div className='w-full h-fit border rounded-lg gap-2 flex flex-col p-4 hover:bg-card hover:border-primary cursor-pointer'>
                    <BiUser size={24} />
                    <span className='font-semibold text-accent-foreground'>Войти</span>
                    <span className='text-muted-foreground'>
                        Если у вас уже есть аккаунт DM Family, войдите в аккаунт для продолжения
                    </span>
                </div>
                {/* <Button variant='outline' className='w-1/2'>Войти</Button> */}
                {/* <Button className='w-1/2'>Зарегистрироваться</Button> */}
            </div>

            <span>Аккаунт DM Family, предоставляет доступ ко всем сервисам DM, под одним аккаунтом, так что вам не придется создавать новый для каждого сервиса.</span>
        </div>
    )
}

export default BeforeStart