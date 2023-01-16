import { Step, StepConnector, stepConnectorClasses, StepContent, StepLabel, Stepper, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import MCButton, { MCSubmitButton } from '../../components/MCStyled/mcButton';
import { FormProvider, useForm } from 'react-hook-form';
import BasicStep from '../../components/step/server/push/basicStep';
import ModStep from '../../components/step/server/push/modStep';
import OptionStep from '../../components/step/server/push/optionStep';
import { useTagFormStore } from '../../zustand/tagFormStore';
import { useSnackbar } from 'notistack';
import { ToastEnum } from '../../components/MCStyled/mcToast';
import { IHelmet } from '../../API/IHelmet';
import DefualtLayout from '../../layouts/defualtLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


export default function ServerAdd () {
    const gall_url = "https://gall.dcinside.com/mgallery/board/view/?id=steve"
    const curse_url = "https://www.curseforge.com/minecraft/modpacks/"

    const schema = z.object({
        url : z.string(),
        userinfo : z.object({
            id : z.string().min(1),
            pw : z.string().min(1)
        }),
        custom : z.object({
            gallurl : z.string().startsWith(gall_url).optional(),
            tags : z.string().array().optional()
        }),
        mods : z.object({
            enable : z.boolean().default(false),
            type : z.string().optional(),
            url : z.string().startsWith(curse_url).optional()
        })

    })
    const navigate = useNavigate();
    const { Tags } = useTagFormStore()
    const { enqueueSnackbar } = useSnackbar();
    const FormMethod = useForm({ resolver : zodResolver(schema) })
    

    
    const [activeStep, setActiveStep] = useState(0);
    const lastStep = 2
    const test = [
        {
            title: "기본 셋팅",
            reactNode : <BasicStep/>
        },
        {
            title: "모드 서버 셋팅",
            reactNode : <ModStep/>
        },
        {
            title: "추가 셋팅",
            reactNode : <OptionStep/>
        }
    ]

    const helmet : IHelmet = {
        title : "서버 추가"
    }



    useEffect(() =>{
        setActiveStep(0)
    },[FormMethod.formState.errors.url,FormMethod.formState.errors.userinfo])

    const onSubmit =async  (data : any) => {
        data.custom.tags = Tags
        
        enqueueSnackbar("제출중...", { variant : "Toast",toastType : ToastEnum.info})
        await axios.post(`${import.meta.env.VITE_BASE_API_URL}/status`,data).then((x) =>{
            if(x.data.success) {
                enqueueSnackbar(x.data.message, { variant : "Toast",toastType : ToastEnum.success})
                navigate("/")
            }
            else{
                enqueueSnackbar(x.data.message, { variant : "Toast",toastType : ToastEnum.error})
            }
        }).catch(err => 
        {
            enqueueSnackbar("서버주소나 아이디 비번을 확인해주세요.", { variant : "Toast",toastType : ToastEnum.error})
        })
    } 
    return(<DefualtLayout helmet={helmet} title="서버추가">
    <FormProvider {...FormMethod}>
    <form onSubmit={FormMethod.handleSubmit(onSubmit)} className="max-w-[600px] m-auto">
        <Stepper activeStep={activeStep} orientation="vertical">
            {test.map((x,i) =>(
                <Step key={i}>
                    <StepLabel optional={i == 0 ? (<p className='text-sm text-red-500'>필수</p>) : (<p className='text-gray-400 text-sm'>선택</p>)}>
                        <p className='text-white text-xl'>{x.title}</p></StepLabel>
                    <StepContent>
                        <div className='flex flex-col'>
                            <div className='flex-grow space-y-2'>
                                {x.reactNode}
                            </div>
                            <div className='flex flex-row justify-end space-x-4 my-4'>
                                {activeStep > 0 && (<MCButton style={{ maxWidth : "140px"}} onClick={() => setActiveStep(x => x - 1) }>이전으로</MCButton>)}
                                {activeStep < lastStep && (<MCButton style={{ maxWidth : "140px"}} onClick={() => setActiveStep(x => x + 1) }>다음으로</MCButton>)}
                            </div>
                        </div>
                    </StepContent>
                </Step>
            ))}
        </Stepper>
        <div className='flex justify-end'>
            {activeStep >= lastStep && (<MCSubmitButton style={{ maxWidth : "200px"}}/>)}
        </div>
        </form>
        </FormProvider>


        <footer className='bottom-0 fixed min-h-[60px]'>


        </footer>

    </DefualtLayout>)
};
