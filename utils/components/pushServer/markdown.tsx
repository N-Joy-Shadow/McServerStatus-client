import { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { TextField } from '@mui/material';


export default function MarkdownRender() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Md,SetMd] = useState<string>("**마크다운은 이런것!**");

    const handleOnChange = (x : any) =>{
        console.log(x.target.value)
        SetMd(x.target.value)
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [preview, SetPreview] = useState<boolean>(true);
    return(<div className='flex flex-row'>
        <TextField onChange={handleOnChange}/>
        
        <p className='prose w-ful'>{Md}</p>
        
    </div>)

};
