import PlusBadge from "@/components/shared/plus-badge";
import { DocShotData, team, user } from "api";
import Image from "next/image";
import Link from "next/link";
import { BiSolidHeart } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";

type Props = {
    shot: DocShotData
}
const Footer = async ({ shot }: Props) => {
    const author = await user.byId.short(shot.authorId)
    const teamData = shot.teamId ? await team.get(shot.teamId) : null
    const haveComments = !!shot.comments.length
    return (
        <div className="w-full mt-3 h-6 shrink-0 flex items-center justify-between gap-3">
            {
                author
                    ? <div className="w-fit h-fit flex items-center justify-start gap-2">
                        <Link href={`/${author.nickname || author.uid}`}>
                            <Image className="rounded-full" src={author.photoUrl} width={24} height={24} alt='profile-photo' />
                        </Link>
                        {
                            teamData
                                ? <>
                                    <span className="text-xs text-muted-foreground">&</span>
                                    <Link href={`/${teamData.doc_id}`}
                                        className="text-xs pr-2 pl-1 py-1 rounded-full bg-card border text-muted-foreground inline-flex items-center gap-1">
                                        {teamData.photoURL ? <Image src={teamData.photoURL} width={16} height={16} alt='team-logo' /> : <div className="w-4 aspect-square rounded-full bg-muted" />}
                                        {teamData.name}
                                    </Link>
                                </>
                                : <span className="font-medium text-sm">{author.displayName}</span>
                        }
                        {author.isSubscriber && <PlusBadge />}
                    </div>
                    : <div />
            }

            <div className="w-fit h-fit flex items-center justify-end gap-2">
                {
                    haveComments &&
                    <div className="w-fit h-fit flex items-center justify-end gap-1">
                        <RiMessage3Fill />
                        <span className="text-sm">{shot.comments.length}</span>
                    </div>
                }
                <div className="w-fit h-fit flex items-center justify-end gap-1">
                    <BiSolidHeart />
                    <span className="text-sm">{shot.likes.length}</span>
                </div>
                <div className="w-fit h-fit flex items-center justify-end gap-1">
                    <BsEyeFill />
                    <span className="text-sm">{shot.views.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Footer