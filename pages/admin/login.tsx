import DefualtLayout from '../../layouts/defualtLayout';
import { IHelmet } from '../../API/IHelmet';
import React from 'react';
export default function Login() {
    const helmet : IHelmet = {
        title : "로그인"
    }


    return(<DefualtLayout title='로그인' helmet={helmet}>
        <>사실 아직 구현이 안됨</>
    </DefualtLayout>)
};
