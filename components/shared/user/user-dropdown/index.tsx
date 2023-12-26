'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import UserPreview from "./user-preview"
import Logout from "./logout"
import { User } from "firebase/auth"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ShortUserData } from "@/types/user"
import { user as userAPI } from '@/api/user'
import Avatar from "@/components/shared/avatar"

type Props = {
    user: User
    size?: number
}
const UserDropdown = ({ user, size }: Props) => {
    const [short, setShort] = useState<ShortUserData | null>(null)
    console.log(short)
    useEffect(() => {
        userAPI.byId.short(user.uid)
        .then( data => setShort(data) )
        // .catch( () => setShort(null) )
    },[user])
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <Avatar src={user.photoURL} isSubscriber={short?.isSubscriber || false} size={size} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 w-60 rounded-xl">
                <UserPreview user={user} position={short ? short.position : undefined} />
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link href='/upload/post'>Профиль</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <Logout />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown