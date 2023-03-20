import { useFormContext } from "react-hook-form";

import { McTextInput } from "../MCStyled/mcStyle";

export default function UserInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h1>아이디랑 비번을 입력해 주세요</h1>
      <div className="flex md:flex-row md:space-x-2 flex-col  ">
          <McTextInput
          className="w-52 mt-2"
            placeholder="ID"
            {...register("userinfo.id", { required: true })}
          />
          <McTextInput
          className="w-52 mt-2"
            type="password" placeholder="Password"
            {...register("userinfo.pw", { required: true })}
          />
      </div>
      {errors.userinfo && (
        <span className=" text-red-600">
          <strong>아이디랑 비밀번호를 입력해주세요</strong>
        </span>
      )}
    </>
  );
}
