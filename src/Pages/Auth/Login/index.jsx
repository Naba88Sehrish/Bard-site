import React, { useState } from 'react'
import AuthLayout from '../../../Components/Layout/AuthLayout'
import FlexCol from '../../../Components/Layout/FlexCol'
import Form from '../../../Components/Form'
import useValidations from '../../../Components/Form/Validations'
import { email, password } from '../../../Components/Form/Validations/Schema'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../../Actions/Auth'
import FlexRow from '../../../Components/Layout/FlexRow'

const Login = () => {
    const [Loading, setLoading] = useState()
    const { userLogin } = useAuth();
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const backUrl = params.get('redirect');



    const onSubmit = (values) => {
        userLogin(values, setLoading, backUrl || "/");
    }
    const initialValues = { email: "", password: "" }
    const validationSchema = { email: email, password: password }
    const form = useValidations({ onSubmit, validationSchema, initialValues });
    const navigate = useNavigate();
    return (
       
        <AuthLayout>
        <FlexRow className=' items-center justify-between p-20'>
        <div className=' items-center justify-center mr-20'>
        <img src={`${process.env.PUBLIC_URL}/Assets/Images/login.png`} alt='img'  />
        </div>
        <div
    className="bg-white  items-center justify-between p-10 mt-10 "
    style={{ width: '350px', height: '500px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', }}
>
            <form onSubmit={form.handleSubmit}>
                <FlexCol className='gap-[3rem] text-center'>
                    <FlexCol>
                        <h1 className='text-[1.6rem] font-semibold'>Welcome back!</h1>
                        <h1 className='text-[#CC1919] text-sm'>We happy to see you again.</h1>
                    </FlexCol>
                    <FlexCol className={'gap-4'}>
                        <Form.Input form={form} name='email' placeholder={'Email'} />
                        <Form.Input form={form} name='password' type={'password'} placeholder={'Password'} />
                        <p className='text-sm text-[#05477D] cursor-pointer hover:underline' onClick={() => navigate('/forgot-password')}>Forgot your password?</p>
                    </FlexCol>
                    <FlexCol>
                        <Form.Button loading={Loading} type={'submit'} className={'!py-3'}>Log In</Form.Button>
                        <p className='text-sm'>Don't have an account? <span className='text-[#05477D] cursor-pointer hover:underline' onClick={() => navigate('/register')}>Sign up!</span></p>
                    </FlexCol>
                </FlexCol>
            </form></div></FlexRow>
        </AuthLayout>
    )
}

export default Login