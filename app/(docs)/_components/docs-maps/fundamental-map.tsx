import { DocumentMap } from "@/types/docs";
import { fundamentals } from "../const/fundamentals";
import WelcomeBlock from "../blocks/fundamentals/welcome";
import { Separator } from "@/components/ui/separator";
import BeforeStart from "../blocks/fundamentals/before-start";

export const fundamental_map: DocumentMap = {
    id: 'fundamentals',
    name: 'Основы',
    blocks: [
        <WelcomeBlock key={'fundamentals-welcome'} />,
        <Separator key={'fundamentals-separator-1'} />,
        <BeforeStart key={'fundamentals-before-start'} />
    ],
    side: fundamentals
}