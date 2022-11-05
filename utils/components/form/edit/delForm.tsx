import { Modal } from "@mui/material";
import MCButton from "../../MCStyled/mcButton";
import { useState } from "react";
import ModalLayout from "../../../layouts/modalLayout";

import bg from "../../../../styles/mc/Background.module.css";
import field from "../../../../styles/mc/TextField.module.css";
import btn from "../../../../styles/mc/Button.module.css";

import { useForm } from "react-hook-form";
import { RemoveServer } from "../../fetch/insertServer";

interface DelFormProps {
    hostname : string
}

export default function DelForm(props : DelFormProps) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data: any) => {
    const data_s = {...data, url : props.hostname}

    await RemoveServer(data_s).then((x) =>{
        alert(x.data.message)
        window.location.href = "/"
      })
  };

  return (
    <div className="h-10 mt-4">
      <MCButton onClick={handleOpen}>
        <p className="text-red-600">
          <strong>삭제하기</strong>
        </p>
      </MCButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="de"
      >
        <ModalLayout>
          <div>
            <div className={bg.Mcbg_l}>
              <div className="text-xl text-center self-center p-2 flex justify-start cursor-pointer pl-4">
                {"진짜 삭제?"}
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={bg.Mcbg}>
              <div className="text-center justify-center flex flex-col space-y-4">
                <h1 className="mt-4 text-xl">아이디랑 비번을 입력해 주세요</h1>
                <div className="flex flex-row space-x-2 justify-center">
                  <div className="w-52">
                    <input
                      type="text"
                      className={field.McField}
                      placeholder="ID"
                      {...register("userinfo.id", { required: true })}
                    />
                  </div>
                  <div className="w-52">
                    <input
                      type="password"
                      className={field.McField}
                      placeholder="Password"
                      {...register("userinfo.pw", { required: true })}
                    />
                  </div>
                </div>
                {errors.userinfo && (
                  <span className=" text-red-600">
                    <strong>
                      아이디랑 비밀번호를 입력해주세요
                    </strong>
                  </span>
                )}
                <div className="h-10 mt-[2rem]">
                  <input
                    type="submit"
                    className="text-red-600"
                    value="삭제하기"
                  />
                </div>
              </div>
            </form>
          </div>
        </ModalLayout>
      </Modal>
    </div>
  );
}
