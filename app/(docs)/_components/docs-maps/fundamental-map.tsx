import { DocumentMap } from "@/types/docs";
import { fundamentals } from "../const/fundamentals";
import WelcomeBlock from "../blocks/fundamentals/welcome";
import { Separator } from "@/components/ui/separator";

export const fundamental_map: DocumentMap = {
    id: 'fundamentals',
    blocks: [
        <WelcomeBlock key={'fundamentals-welcome'} />,
        <Separator key={'fundamentals-separator-1'} />
    ],
    side: fundamentals
}