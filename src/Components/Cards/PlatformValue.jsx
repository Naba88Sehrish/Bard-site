import React from 'react'
import FlexCol from '../Layout/FlexCol'
import Form from '../Form'
import { useNavigate } from 'react-router-dom'

const PlatformValue = ({ img, title,link}) => {
    const naviagte = useNavigate();
    return (
        <div  data-aos="zoom-in">
            <FlexCol className={'gap-4'}>
            <div  data-aos="fade-left"className="flex items-center  justify-center flex-wrap py-[3rem]">
                        <div className=' items-center   px-[2.5rem] py-[1.3rem] '>
                        
                        <img  src={`${process.env.PUBLIC_URL}/Assets/Images/${img}`} style={{ width: '130px', height: 'auto'}} alt="android" />
                        <Form.Button className='rounded-full mt-5 ml-3' 
                        onClick={() => {
                            naviagte(link)
                          }}
                        >
                        <h1>{title}</h1>
                        </Form.Button>
                        
                        </div></div>
            </FlexCol>
        </div>
    )
}

export default PlatformValue