'use client'
import { Button, ButtonProps } from "@/components/ui/button"
import { auth } from "@/utils/app"
import Link from "next/link"
import UserDropdown from "./user-dropdown"
import { useCookieState } from 'ahooks'
import { useEffect } from "react"
import { useAuthState } from "@/hooks/useAuthState"

type Props = {
    size?: number
    buttonSize?: ButtonProps['size']
}
const User = ({ size=36, buttonSize='default' }: Props) => {
    const [user] = useAuthState(auth)
    const [_, setCookie] = useCookieState('uid')
    useEffect(() => {
        if (user) {
            setCookie(user.uid)
        } else setCookie('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    if (!user) return <Button asChild size={buttonSize} variant='outline'>
        <Link href='/login' className="text-inherit">Войти</Link>
    </Button>
    return (
        <UserDropdown user={user} size={size} />
    )
}

export default User