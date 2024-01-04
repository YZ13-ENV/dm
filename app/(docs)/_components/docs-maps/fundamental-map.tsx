import { DocumentMap } from "@/types/docs";
import { fundamentals } from "../const/fundamentals";
import WelcomeBlock from "../blocks/fundamentals/welcome";
import { Separator } from "@/components/ui/separator";
import BeforeStart from "../blocks/fundamentals/before-start";
import AboutProjects from "../blocks/fundamentals/projects/about-projects";
import AboutProjectDM from "../blocks/fundamentals/projects/dm/about-dm";
import AboutProjectYZ13 from "../blocks/fundamentals/projects/yz13/about-yz13";

export const fundamental_map: DocumentMap = {
    id: 'fundamentals',
    root: true,
    name: 'Основы',
    blocks: [
        <WelcomeBlock key={'fundamentals-welcome'} />,
        <Separator key={'fundamentals-separator-1'} />,
        <BeforeStart key={'fundamentals-before-start'} />
    ],
    side: fundamentals
}

export const fundamental_projects_map: DocumentMap = {
    id: 'fundamentals/projects',
    name: 'Проекты',
    blocks: [
        <AboutProjects key={'fundamentals/projects-about'} />
    ],
    side: fundamentals
}

export const fundamental_projects_dm_map: DocumentMap = {
    id: 'fundamentals/projects/dm',
    name: 'DM',
    blocks: [
        <AboutProjectDM key={'fundamentals/projects-about/dm'} />
    ],
    side: fundamentals
}

export const fundamental_projects_yz13_map: DocumentMap = {
    id: 'fundamentals/projects/yz13',
    name: 'YZ13',
    blocks: [
        <AboutProjectYZ13 key={'fundamentals/projects-about/yz13'} />
    ],
    side: fundamentals
}