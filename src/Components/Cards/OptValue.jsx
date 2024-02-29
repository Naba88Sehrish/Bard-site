import React from 'react'
import FlexCol from '../Layout/FlexCol'
import Form from '../Form'

const OptValue = ({ img, title, info }) => {
    return (
        <div className='bg-[#D5E1EA] rounded-2xl border-b border-[#CC1919] px-6 py-10' data-aos="zoom-in">
            <FlexCol className={'gap-4'}>
                <div>
                    <Form.Button className={'!px-2.5 !py-2.5'}>
                        <img src={`${process.env.PUBLIC_URL}/Assets/Images/${img}`} alt='img' className="h-[3rem] object-contain" />
                    </Form.Button>
                </div>
                <div>
                    <h2 className='font-bold text-[#105586]'>{title}</h2>
                </div>
                <div>
                    <p >{info}</p>
                </div>
            </FlexCol>
        </div>
    )
}

export default OptValue