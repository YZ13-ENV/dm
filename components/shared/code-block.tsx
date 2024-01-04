'use client'
import { BiFileBlank } from "react-icons/bi"
import { MdContentCopy } from 'react-icons/md'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from "../ui/button";

type Props = {
    filename?: string
    children: string
    showLineNumber?: boolean
    language?: string
}
const CodeBlock = ({ children, filename, showLineNumber=false, language='typescript' }: Props) => {

    return (
        <div className="w-full h-fit flex flex-col rounded-xl border">
            {
                filename &&
                <div className="w-full px-3 border-b rounded-t-xl h-12 flex items-center justify-between">
                    <div className="w-fit flex items-center gap-2">
                        <BiFileBlank className='text-muted-foreground' />
                        <span className="text-sm text-muted-foreground">{filename}</span>
                    </div>
                    <Button disabled variant='ghost' size='icon'><MdContentCopy /></Button>
                </div>
            }
            <div className={`p-3 bg-card ${filename ? 'rounded-b-xl' : 'rounded-xl'}`}>
                <SyntaxHighlighter language={language} style={monokaiSublime} showLineNumbers={showLineNumber} 
                customStyle={{ background: 'transparent !important', fontSize: '.85rem', lineHeight: '1.25rem' }}>
                    {children}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default CodeBlock