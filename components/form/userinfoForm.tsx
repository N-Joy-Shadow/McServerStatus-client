import { useFormContext } from "react-hook-form";

import field from "../../styles/mc/TextField.module.css";

export default function UserInfoForm() {
const {register,formState : {errors}} = useFormContext();


  return (
    <>
      <h1>아이디랑 비번을 입력해 주세요</h1>
      <div className="flex flex-row space-x-2">
        <div className="w-52">
          <input type="text" className={field.McField} placeholder="ID" {...register("userinfo.id", {required :true})}/>
        </div>
        <div className="w-52">
          <input type="password" className={field.McField} placeholder="Password" {...register("userinfo.pw",{required : true})}/>
        </div>
      </div>
      {errors.userinfo && (
                  <span className=" text-red-600">
                    <strong>
                      아이디랑 비밀번호를 입력해주세요
                    </strong>
                  </span>
                )}
    </>
  );
}
