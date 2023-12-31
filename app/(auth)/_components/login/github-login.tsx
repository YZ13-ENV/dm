'use client'
import { Button } from '@/components/ui/button'
import { BiLoaderAlt, BiLogoGithub } from 'react-icons/bi'
import { useSignInWithGithub } from 'react-firebase-hooks/auth'
import { auth } from '@/utils/app'
import { useRouter } from 'next/navigation'

const GithubLogin = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth)
    const { push } = useRouter()
    const getSignIn = () => {
        signInWithGithub()
        .then(res => {
            if (res && res.user) push('')
            // console.log(res)
        })
        .catch(err => console.log(err))
    }
    return (
        <Button disabled={loading || user !== undefined} onClick={getSignIn} variant='secondary' className="h-12 gap-2 text-base rounded-lg">
            { 
                loading  
                ? <BiLoaderAlt className='animate-spin' />
                : <BiLogoGithub />
            }
            Войти через Github
        </Button>
    )
}

export default GithubLogin