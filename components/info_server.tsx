import axios from 'axios';
import { useEffect } from 'react';
export interface serverData {
    hostname : string
}

export default function infoServer(data : serverData){



    return(<div>
        <p>{data.hostname} 빵디</p>
    </div>)
};
