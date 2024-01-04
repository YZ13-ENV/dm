import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

const AboutProjectYZ13 = () => {
    return (
        <div className='w-full h-fit'>
            <MDXRemote 
            options={{
                mdxOptions: { remarkPlugins: [remarkGfm, remarkBreaks] } 
            }}
            source={`
                ## YZ13 

                Изначально YZ13 - это мой никнейм, который я использовал при регистрации на GitHub. При продумывании проектов, которые будут входить DM Family я не мог придумать название для проекта с постами, поэтому решил назвать взять мой ник как название.
            `
            .replace(/\n/gi, "&nbsp; \n")
            } />
        </div>
    )
}

export default AboutProjectYZ13