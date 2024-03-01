import React, { useEffect, useState } from 'react'
import AuthLayout from '../../../Components/Layout/AuthLayout'
import FlexCol from '../../../Components/Layout/FlexCol'
import Form from '../../../Components/Form'
import useValidations from '../../../Components/Form/Validations'
import { text } from '../../../Components/Form/Validations/Schema'
import { useLocation, useNavigate } from 'react-router-dom'
import VerificationCodeInput from '../../../Components/Form/VerificationCodeInput'
import useAuth from '../../../Actions/Auth'
import { getToken } from '../../../Actions/Cookies'

const VerifyCode = () => {
    const [Loading, setLoading] = useState();
    const { otpVerification, forgotOtpVerification, Resend } = useAuth();

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const backUrl = params.get('redirect');



    const onSubmit = (values) => {
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.has('forgot')) {
            forgotOtpVerification(values, setLoading)
        } else {
            otpVerification(values, setLoading, backUrl || "/")
        }
    }
    const initialValues = { otp: "" }
    const validationSchema = { otp: text }
    const form = useValidations({ onSubmit, validationSchema, initialValues });
    const navigate = useNavigate();

    const [Value, setValue] = useState();

    useEffect(() => {
        form.setFieldValue('otp', Value);
    }, [Value])



    return (
        <AuthLayout><div
    className="bg-white  items-center justify-center p-10 mt-10 "
    style={{ width: '350px', height: '440px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', }}
>
            <form onSubmit={form.handleSubmit}>
                <FlexCol className='gap-[3rem] text-center'>
                    <FlexCol>
                        <h1 className='text-[1.6rem] font-semibold'>Enter code</h1>
                        <h1 className='text-[#CC1919] text-sm'>We send a 4-digit verification code to your email.</h1>
                    </FlexCol>
                    <FlexCol className={'gap-4'}>
                        <VerificationCodeInput setValue={setValue} form={form} />
                    </FlexCol>
                    <FlexCol>
                        <p className='text-sm'>
                            Didn't recevied your code? <span className='text-[#CC1919] cursor-pointer underline' onClick={Resend}>Resend</span>
                        </p>
                        <Form.Button loading={Loading} type={'submit'} className={'!py-3'}>Save</Form.Button>
                        <Form.Button onClick={() => navigate('/register')} variant={'border'} className={'!py-3'}>Back</Form.Button>
                    </FlexCol>
                </FlexCol>
            </form></div>
        </AuthLayout>
    )
}

export default VerifyCode