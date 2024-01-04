import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

const AboutProjects = () => {
    return (
        <div className='w-full h-fit'>
            <MDXRemote 
            options={{
                mdxOptions: { remarkPlugins: [remarkGfm, remarkBreaks] } 
            }}
            source={`
                ## Перед тем как перейти к проектам 

                Все проекты были созданы для демонстрации навыков, не для коммерческого пользования, подписка не распространяется за деньги.

                Далее при переходе к проектам вы увидите их описание и их назначение, какую проблему они решают, или по какой причине были созданы.
            `
            .replace(/\n/gi, "&nbsp; \n")
            } />
        </div>
    )
}

export default AboutProjects