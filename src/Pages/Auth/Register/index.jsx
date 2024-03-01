import React from 'react'
import AuthLayout from '../../../Components/Layout/AuthLayout'
import FlexCol from '../../../Components/Layout/FlexCol'
import Form from '../../../Components/Form'
import useValidations from '../../../Components/Form/Validations'
import { email, password, confirm } from '../../../Components/Form/Validations/Schema'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../Actions/Auth'
import { useState } from 'react'
import FlexRow from '../../../Components/Layout/FlexRow'

const Register = () => {
    const navigate = useNavigate();
    const { Signup } = useAuth();
    const [Loading, setLoading] = useState(false)

    const onSubmit = (values) => {
        Signup(values, setLoading);
    }

    const initialValues = { email: "", password: "", confirm: "" }
    const validationSchema = { email: email, password: password, confirm: confirm }
    const form = useValidations({ onSubmit, validationSchema, initialValues });

    return (
        <AuthLayout>
         <FlexRow className=' items-center justify-between p-20'>
        <div className=' items-center justify-center mr-20'>
        <img src={`${process.env.PUBLIC_URL}/Assets/Images/register.png`} alt='img'  />
        </div>
        <div
    className="bg-white  items-center justify-between p-10 mt-10 "
    style={{ width: '350px', height: '520px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', }}
>
            <form onSubmit={form.handleSubmit}>
                <FlexCol className='gap-[3rem] text-center'>
                    <FlexCol>
                        <h1 className='text-[1.6rem] font-semibold'>Register yourself!</h1>
                        <h1 className='text-[#CC1919] text-sm'>Protect yourself from evil hackers and spies today!</h1>
                    </FlexCol>
                    <FlexCol className={'gap-4'}>
                        <Form.Input form={form} name='email' placeholder={'Email'} />
                        <Form.Input form={form} name='password' type={'password'} placeholder={'Password'} />
                        <Form.Input form={form} name='confirm' type={'password'} placeholder={'Confirm Password'} />
                    </FlexCol>
                    <FlexCol>
                        <Form.Button loading={Loading} type={'submit'} className={'!py-3'}>Create Account</Form.Button>
                        <p className='text-sm'>Have an account? <span className='text-[#05477D] cursor-pointer hover:underline' onClick={() => navigate('/login')}>Log in.</span></p>
                    </FlexCol>
                </FlexCol>
            </form></div></FlexRow>
        </AuthLayout>
    )
}

export default Register