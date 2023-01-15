import { Step, StepConnector, stepConnectorClasses, StepContent, StepLabel, Stepper, styled } from '@mui/material';
import { useState } from 'react';
import MCButton, { MCDisabledButton, MCInputButton, MCSubmitButton } from '../../components/MCStyled/mcButton';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import BasicStep from '../../components/step/server/push/basicStep';
import ModStep from '../../components/step/server/push/modStep';
import OptionStep from '../../components/step/server/push/optionStep';
import { useTagFormStore } from '../../zustand/tagFormStore';
import { useSnackbar } from 'notistack';
import { ToastEnum } from '../../components/MCStyled/mcToast';
import { IHelmet } from '../../API/IHelmet';
import DefualtLayout from '../../layouts/defualtLayout';
import axios from 'axios';
import { redirect } from 'react-router-dom';
export default function DevPush() {
    const FormMethod = useForm()
    const { Tags } = useTagFormStore()
    const { enqueueSnackbar } = useSnackbar();
    
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



    const onSubmit =async  (data : any) => {
        data.custom.tags = Tags
        enqueueSnackbar("제출중...", { variant : "Toast",toastType : ToastEnum.info})
        await axios.post(`${import.meta.env.VITE_BASE_API_URL}/status`,data).then((x) =>{
            if(x.data.success) {
                enqueueSnackbar(x.data.message, { variant : "Toast",toastType : ToastEnum.success})
                redirect("/")
            }
            else{
                enqueueSnackbar(x.data.message, { variant : "Toast",toastType : ToastEnum.error})
            }
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
