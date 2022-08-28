import { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { TextField } from '@mui/material';
import ReactMarkdown from 'react-markdown';


export default function MarkdownRender() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Md,SetMd] = useState<string>("");

    const handleOnChange = (x : any) =>{
        console.log(x.target.value)
        SetMd(x.target.value)
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [preview, SetPreview] = useState<boolean>(true);
    return(<div className='flex flex-row'>
        <TextField onChange={handleOnChange}/>
        
        <ReactMarkdown>{Md}</ReactMarkdown>        
    </div>)

};
