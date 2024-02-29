import React from 'react'
import FlexCol from '../../Components/Layout/FlexCol'
import { PlatformData } from '../../Data'
import PlatformValue from '../../Components/Cards/PlatformValue'
import Button from '../../Components/Common/Button'

const Platform = () => {
    return (
        <div className='py-[6rem]'>
            <FlexCol className={'gap-[2rem] justify-center items-center'}>
                <h2 className='font-extrabold text-[2rem] leading-[1.2] text-center' data-aos="zoom-in">
                Download  <span className='text-[#CC1919]'> Bard VPN </span> For All Your Devices
                </h2>
                <p className='text-center text-lg'>
                Access Bard VPN's download page to secure your online journey with our trusted VPN client. Protect your data today
                        </p>
                <div className='mt-[3rem]'>
                <div className='grid xl:grid-cols-4 gap-[2rem]'>
    {PlatformData.map(item => (
        <div key={item.title} className="flex items-center justify-center text-center">
            <PlatformValue link={item.link} img={item.img} title={item.title} />
        </div>
           ))}
         </div>


                </div>
                <Button></Button>
            </FlexCol>
            
        </div>
    )
}

export default Platform