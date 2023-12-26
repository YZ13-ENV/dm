
type Props = {
    children?: JSX.Element | JSX.Element[]
    name?: string
    description?: string
    direction?: 'auto' | 'horizontal' | 'vertical'
}
const SettingsBlock = ({ children, description, name, direction='auto' }: Props) => {
    const wrapperDirectionClassName = direction === 'auto' ? 'lg:flex-row flex-col' : direction === 'horizontal' ? 'flex-row' : 'flex-col'
    return (
        <div className={`w-full h-fit border-b gap-4 py-4 flex ${wrapperDirectionClassName}`}>
            <div className="lg:w-1/3 w-full h-fit flex-col flex">
                <span className='text-base font-medium text-accent-foreground'>{ name }</span>
                <span className='text-sm font-light text-muted-foreground'>{ description }</span>
            </div>
            <div className="lg:w-2/3 w-full h-fit flex flex-col gap-2">{ children }</div>
        </div>
    )
}

export default SettingsBlock