import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

const ApiEndpoints = () => {
    return (
        <div className='w-full h-full'>
            <MDXRemote
            options={{
                scope: {
                    name: 'DM',
                },
                mdxOptions: { remarkPlugins: [remarkGfm, remarkBreaks] },
            }}
            source={`
                ## {name} REST API Endpoints
            
                ### Notes

                ### Projects

                ### User

                ### Shots

            `
            .replace(/\n/gi, "&nbsp; \n")
            } />
        </div>
    )
}

export default ApiEndpoints