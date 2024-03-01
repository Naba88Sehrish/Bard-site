import React, { useEffect, useState } from 'react'
import AuthLayout from '../../../Components/Layout/AuthLayout'
import FlexCol from '../../../Components/Layout/FlexCol'
import Form from '../../../Components/Form'
import useValidations from '../../../Components/Form/Validations'
import { confirm, password } from '../../../Components/Form/Validations/Schema'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../Actions/Auth'

const Reset = () => {
    const { resetPassword } = useAuth();
    const [Loading, setLoading] = useState(false)

    const onSubmit = (values) => {
        resetPassword(values,setLoading)
    }
    const initialValues = { confirm: "", password: "" }
    const validationSchema = { password: password, confirm: confirm }
    const form = useValidations({ onSubmit, validationSchema, initialValues });
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (!(queryParams.has('forgot'))) {
            navigate('/login')
        }
    }, [])


    return (
        <AuthLayout> <div
    className="bg-white  items-center justify-center p-10 mt-10 "
    style={{ width: '350px', height: '440px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', }}
>
            <form onSubmit={form.handleSubmit}>
                <FlexCol className='gap-[3rem] text-center'>
                    <FlexCol>
                        <h1 className='text-[1.6rem] font-semibold'>Password reset</h1>
                        <h1 className='text-[#CC1919] text-sm'>Enter new password and then repeat it.</h1>
                    </FlexCol>
                    <FlexCol className={'gap-4'}>
                        <Form.Input form={form} name='password' type={'password'} placeholder={'Password'} />
                        <Form.Input form={form} name='confirm' type={'password'} placeholder={'Confirm Password'} />
                    </FlexCol>
                    <FlexCol>
                        <Form.Button loading={Loading} type={'submit'} className={'!py-3'}>Save</Form.Button>
                    </FlexCol>
                </FlexCol>
            </form></div>
        </AuthLayout>
    )
}

export default Reset