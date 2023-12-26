import DmMark from '@/components/shared/dm-mark'
import { Drawer, DrawerContent } from '@/components/ui/drawer'
import LoginCenter from "../../_components/login";

const page = () => {
    return (
        <div className='w-full h-screen'>
            <div className="w-full h-1/2 flex items-center justify-center">
                <DmMark size={128} />
            </div>
            <Drawer open={true}>
                <DrawerContent className='max-w-sm mx-auto w-full shrink-0'>
                    <LoginCenter />
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default page