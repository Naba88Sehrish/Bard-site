import React from 'react'
import Button from './Button.jsx'

const Banner = ({ data, img }) => {
    return (
        <div className='grid lg:grid-cols-2 gap-[2rem] py-20'>
            <div className={'flex flex-col gap-[2rem] justify-center'} data-aos="fade-right">
                {data}
                <Button></Button>
            </div>
            
            <div className='flex items-center justify-center' data-aos="fade-left">
                <img src={`${process.env.PUBLIC_URL}${img}`}   alt='img' className="object-contain  md:h-[22rem] h-[15rem]" />
            </div>
        </div>
    )
}

export default Banner