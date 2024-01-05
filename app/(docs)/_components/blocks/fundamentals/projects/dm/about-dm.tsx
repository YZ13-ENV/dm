import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

const AboutProjectDM = () => {
    return (
        <div className='w-full h-fit'>
            <MDXRemote 
            options={{
                mdxOptions: { remarkPlugins: [remarkGfm, remarkBreaks] } 
            }}
            source={`
                ## DM (DarkMaterial) 

                Полное название - **DarkMaterial**, далее **DM**.


                ## Для чего нужен DM???

                Корневое приложение семейства DM, оно выполняет роль хаба всех приложений, управлением профилем и местом авторизации.
            `
            .replace(/\n/gi, "&nbsp; \n")
            } />
        </div>
    )
}

export default AboutProjectDM