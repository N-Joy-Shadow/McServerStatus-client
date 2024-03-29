import { useFormContext, useWatch } from 'react-hook-form';
import McToggle from '../../../MCStyled/mcToggle';
import McControlToggle from '../../../MCStyled/controller/mcCToggle';
import { useEffect } from 'react';
import McTextInput from '../../../MCStyled/controller/mcTextInput';
import McSelect from '../../../MCStyled/controller/mcSelect';
export default function ModStep() {
    const { register,watch } = useFormContext()
    const watchIsMod = watch("mods.enable",false)
    const watchType = watch("mods.type","")
    return (<>
        <p className="text-red-500">현재 준비중입니다.</p>
        모드 서버 인가요? <McControlToggle name='mods.enable' value={watchIsMod}/><br/>
        {watchIsMod && (<div className='space-y-2'>
            
            <p>모드 서버 파일 타입을 선택해 주세요</p>
            <McSelect/>
            {watchType != "" && <McTextInput name='mods.url' placeholder='https://curseforge.com/minecraft/modpacks/all-the-mods-8'/>}
            

        
        
        
        
        </div>)}
    </>)
};
