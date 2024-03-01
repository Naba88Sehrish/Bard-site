import React, { useState } from 'react'
import AuthLayout from '../../../Components/Layout/AuthLayout'
import FlexCol from '../../../Components/Layout/FlexCol'
import Form from '../../../Components/Form'
import useValidations from '../../../Components/Form/Validations'
import { email, password } from '../../../Components/Form/Validations/Schema'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../Actions/Auth'

const Forgot = () => {
    const { forgotPassword } = useAuth();
    const [Loading, setLoading] = useState(false);

    const onSubmit = (values) => {
        forgotPassword(values, setLoading)
    }
    const initialValues = { email: "" }
    const validationSchema = { email: email }
    const form = useValidations({ onSubmit, validationSchema, initialValues });
    const navigate = useNavigate();

    return (
        <AuthLayout>
        <div
    className="bg-white  items-center justify-center p-10 mt-10 "
    style={{ width: '350px', height: '440px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', }}
>
            <form onSubmit={form.handleSubmit}>
                <FlexCol className='gap-[3rem] text-center'>
                    <FlexCol>
                        <h1 className='text-[1.6rem] font-semibold'>Forgot password?</h1>
                        <h1 className='text-[#CC1919] text-sm'>No worries, we’ll send reset instructions.</h1>
                    </FlexCol>
                    <FlexCol className={'gap-4'}>
                        <Form.Input form={form} name='email' placeholder={'Email'} />
                    </FlexCol>
                    <FlexCol>
                        <Form.Button loading={Loading} type={'submit'} className={'!py-3'}>Reset Password</Form.Button>
                        <Form.Button variant='border' className={'!py-3'} onClick={() => navigate('/login')}>Back</Form.Button>
                    </FlexCol>
                </FlexCol>
            </form></div>
        </AuthLayout>
    )
}

export default Forgot