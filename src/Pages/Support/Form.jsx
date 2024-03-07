import React from 'react'
import FlexCol from '../../Components/Layout/FlexCol'
import Form from '../../Components/Form'
import useValidations from '../../Components/Form/Validations'
import { email, text } from '../../Components/Form/Validations/Schema'
import FlexRow from '../../Components/Layout/FlexRow'
import Lottie from 'lottie-react'
import contact from './contact .json'
const ContactForm = () => { 
      
      


    const onSubmit = (values) => {
         "Thank you for your submission!"
    }
    const initialValues = { email: "", username: "",text:"" }
    const validationSchema = { email: email, username: text,text:text ,}
    const form = useValidations({ onSubmit, validationSchema, initialValues });
    
    return (
       
        
        <FlexRow className=' items-center justify-between p-20'>
        <div className=' items-center justify-center mr-20'>
        <Lottie animationData={contact } />
        </div>
        <div
    className="bg-white  items-center justify-between p-10 mt-10 "
    style={{ width: '400px', height: '550px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', }}
>
            <form onSubmit={form.handleSubmit}>
                <FlexCol className='gap-[3rem] text-center'>
                    <FlexCol>
                        <h1 className='text-[1.6rem] font-semibold'>Contact us!</h1>
                        <h1 className='text-[#CC1919] text-sm'>We happy to see you again.</h1>
                    </FlexCol>
                    <FlexCol className={'gap-4'}>
                        <Form.Input form={form} name='email' placeholder={'Email'} />
                        <Form.Input form={form} name='username' type={'text'} placeholder={'Username'} />
                        <Form.Textarea form={form} name='text' type={'text'} placeholder={'Type Your message here'} />
                        
                    </FlexCol>
                    <FlexCol>
                        <Form.Button  type={'submit'} >Submit</Form.Button>
                       
                    </FlexCol>
                </FlexCol>
            </form></div></FlexRow>
     
    )
}

export default ContactForm