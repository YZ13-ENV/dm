'use client'
import { Button } from '@/components/ui/button'
import { BiLoaderAlt, BiLogoGoogle } from 'react-icons/bi'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '@/utils/app'
import { useRouter } from 'next/navigation'

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const { push } = useRouter()
    const getSignIn = () => {
        signInWithGoogle()
        .then(res => {
            if (res && res.user) push('')
            // console.log(res)
        })
        .catch(err => console.log(err))
    }
    return (
        <Button disabled={loading || user !== undefined} onClick={getSignIn} className="h-12 gap-2 text-base rounded-lg">
            { 
                loading  
                ? <BiLoaderAlt className='animate-spin' />
                : <BiLogoGoogle />
            }
            Войти через Google
        </Button>
    )
}

export default GoogleLogin