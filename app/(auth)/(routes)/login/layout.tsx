import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {
    children: JSX.Element
}
const layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col w-full h-screen">
            <header className="px-6 h-16 shrink-0 flex items-center">
                <Button variant='outline'><Link href='/'>Вернуться</Link></Button>
            </header>
            {/* <Header /> */}
            {children}
        </div>
    )
}

export default layout