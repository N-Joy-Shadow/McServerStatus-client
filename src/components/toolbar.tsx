import MCButton from './MCStyled/mcButton';
import { McButton,McTextInput } from './MCStyled/mcStyle';
import MCTextField from './MCStyled/mcTextField';
import McToggle from './MCStyled/mcToggle';



export default function Toolbar() {
    return <div className='flex justify-between mx-4 items-center'>
        <div className="grow flex">
            {/* <MCTextField/> */}
            <McButton width='50px'>asd</McButton>
            <McTextInput/>

        </div>

        <label className="flex flex-row">
            <p className="mr-4 text-center cursor-pointer select-none hidden md:block">온라인 스위치</p>
            <McToggle onClick={(e) => {}} defaultChecked={true}/>
          </label>
    </div>
};
