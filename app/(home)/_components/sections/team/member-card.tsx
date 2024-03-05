import { user } from "api"
import Image from "next/image"

type Props = {
  member: string
}
const TeamMemberCard = async ({ member }: Props) => {
  const data = await user.byId.short(member)
  if (!data) return null
  return (
    <div className="w-full aspect-[1/1.15] p-3 rounded-xl bg-card border flex flex-col gap-2">
      <div className="w-full aspect-[1/1.15] relative rounded-lg bg-muted border">
        <Image src={data.photoUrl} className="object-cover rounded-lg" fill alt="user-picture" />
      </div>
      <div className="flex items-center justify-between w-full h-fit">
        <span className="font-medium text-accent-foreground">{data.displayName}</span>
        {
          data.nickname
            ? <span className="text-sm font-light text-muted-foreground">@{data.nickname}</span>
            : <span></span>
        }
      </div>
      <div className="flex items-center justify-between w-full h-fit">
        <span className="text-sm font-light text-muted-foreground">{data.position || 'Не указано'}</span>
        <span className="text-sm font-light text-muted-foreground"></span>
      </div>
    </div>
  )
}
export default TeamMemberCard