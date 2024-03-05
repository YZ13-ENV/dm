import { user as userAPI } from "api"
import Image from "next/image"

type Props = {
  uid: string
  hideName?: boolean
  className?: string
}
const PostAuthor = async ({ uid, hideName = false, className }: Props) => {
  const user = await userAPI.byId.short(uid)
  if (!user) return null
  return (
    <div className="relative flex items-center gap-2 w-fit h-fit">
      {
        user.photoUrl
          ? <Image src={user.photoUrl} className="rounded-full" width={36} height={36} alt='profile-photo' />
          : <div className="rounded-full bg-muted w-9 aspect-square" />
      }
      {
        !hideName &&
        <div className="w-full h-full flex flex-col">
          <span className="text-base font-medium text-accent-foreground">{user.displayName}</span>
          <span className="text-sm text-muted-foreground">{user.email}</span>
        </div>
      }
    </div>
  )
}

export default PostAuthor