import { McBlackContainer, McButton,McTextInput } from './MCStyled/mcStyle';
import McToggle from './MCStyled/mcToggle';



export default function Toolbar() {
    return <div className='flex flex-col mx-4 space-y-2'>
        <div className='flex justify-between items-center'>
            <div className="grow flex">
                {/* <MCTextField/> */}
                <McTextInput placeholder='서버 검색' />
                <McButton className='px-2 outline outline-black'>검색</McButton>

            </div>

            <label className="flex flex-row">
                <p className="mr-4 text-center cursor-pointer select-none hidden md:block">온라인 스위치</p>
                <McToggle onClick={(e) => {}} defaultChecked={true}/>
            </label>
        </div>
        <div className='flex flex-row'>

            <McBlackContainer className='grow-0 px-2 py-1'>
                태그 목록 
            </McBlackContainer>
            <div className='grow'></div>
        </div>
    </div> 
};
