import { BiFileBlank } from "react-icons/bi"
import { MdContentCopy } from 'react-icons/md'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
    filename: string
    children: string
}
const CodeBlock = ({ children, filename }: Props) => {
    return (
        <div className="w-full h-fit flex flex-col rounded-xl border">
            <div className="w-full px-3 border-b rounded-t-xl h-12 flex items-center justify-between">
                <div className="w-fit flex items-center gap-2">
                    <BiFileBlank className='text-muted-foreground' />
                    <span className="text-sm text-muted-foreground">{filename}</span>
                </div>
                <MdContentCopy />
            </div>
            <code className="p-3 bg-card rounded-b-xl">
                <SyntaxHighlighter language="typescript" style={monokaiSublime} showLineNumbers 
                customStyle={{ background: 'transparent !important', fontSize: '.85rem', lineHeight: '1.25rem' }}>
                    {children}
                </SyntaxHighlighter>
            </code>
        </div>
    )
}

export default CodeBlock