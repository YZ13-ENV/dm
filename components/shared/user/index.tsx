'use client'
import { Button } from "@/components/ui/button"
import { auth } from "@/utils/app"
import Link from "next/link"
import UserDropdown from "./user-dropdown"
import { useCookieState } from 'ahooks'
import { useEffect } from "react"
import { useAuthState } from "@/hooks/useAuthState"

type Props = {
    size?: number
}
const User = ({ size=36 }: Props) => {
    const [user] = useAuthState(auth)
    const [_, setCookie] = useCookieState('uid')
    useEffect(() => {
        if (user) {
            setCookie(user.uid)
        } else setCookie('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    if (!user) return <Button asChild variant='outline'>
        <Link href='/login'>Войти</Link>
    </Button>
    return (
        <UserDropdown user={user} size={size} />
    )
}

export default User