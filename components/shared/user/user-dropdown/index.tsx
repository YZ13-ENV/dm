'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import UserPreview from "./user-preview"
import Logout from "./logout"
import { User } from "firebase/auth"

type Props = {
    user: User
    size?: number
}
const UserDropdown = ({ user, size }: Props) => {
    if (!user) return null
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar style={{ width: `${size}px`, height: `${size}px` }} className="rounded-full w-9 h-9">
                    <AvatarImage src={user.photoURL || undefined} alt="@shadcn" className="rounded-full" />
                    <AvatarFallback>{user.displayName ? user.displayName?.slice(0, 2) : 'UR'}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 w-60 rounded-xl">
                <UserPreview user={user} />
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem asChild><Link href='/upload/post'>Добавить заметку</Link></DropdownMenuItem> */}
                <Logout />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown