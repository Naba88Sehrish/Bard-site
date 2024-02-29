import React from 'react'
import FlexCol from '../../Components/Layout/FlexCol'
import { OPTData } from '../../Data'
import OptValue from '../../Components/Cards/OptValue'
import Button from '../../Components/Common/Button'

const WhyOpt = () => {
    return (
        <div className='py-[6rem]'>
            <FlexCol className={'gap-[2rem] justify-center items-center'}>
                <h2 className='font-extrabold text-[2rem] leading-[1.2] text-center'>
                Why Choose  <span className='text-[#CC1919]'>Bard VPN?</span>
                </h2>
                <div className='mt-[3rem]'>
                <div className='grid xl:grid-cols-4 gap-[2rem]'>
    {OPTData.map(item => (
        <div key={item.title} className="flex items-center justify-center text-center">
            <OptValue info={item.info} img={item.icon} title={item.title} />
        </div>
           ))}
         </div>


                </div>
                <Button></Button>
            </FlexCol>
            
        </div>
    )
}

export default WhyOpt