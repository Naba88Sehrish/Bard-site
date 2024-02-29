import React from 'react'
import Pricing from './Pricing.jsx'
import FlexCol from '../../Components/Layout/FlexCol'
import Banner from '../../Components/Common/Banner'


const Global = () => {
    return (
        <>
            <div data-aos="fade-left">
            <Banner
                img={'/Assets/Images/data-center-flatline 1.png'}
                data={
                    <>
                        <h2 className='font-bold md:text-[3rem] text-[2.2rem] leading-[1.2]'>
                        Secured VPN Service
                        </h2>
                        <p className='text-[#CC1919] text-lg'>
                        Discover our flexible pricing options, tailored to fit your needs. Get a clear understanding of what you pay for. </p>
                        
                    </>
                }
            /> 
            </div><Pricing></Pricing>
            <div data-aos="fade-right ">
                <FlexCol className={'gap-[4rem] py-[6rem]'}>
                <div data-aos="zoom-in">
                        <h1 className='text-center  text-[2.5rem]'>Instant <span className='text-[#CC1919]'> High-Speed    Server </span> Access 
                        </h1><p className='text-center text-lg'>Elevate your online experience with our top-rated VPN service, featuring seamless setup and swift connections to global destinations.
Optimize your connection speed by selecting a server strategically located for proximity.</p>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/Assets/Images/server-images.png`} className='lg:h-[33rem] h-[25rem] mx-auto object-contain' alt="" />
                    </div>
                   
                </FlexCol>
            </div>
            <div data-aos="fade-left">
            <Banner
                img={'/Assets/Images/free-trail.webp'}
                data={
                    <>
                        <h2 className='font-extrabold md:text-[2rem] text-[2.2rem] leading-[1.2]'>
                        2-Day<span className='text-[#CC1919]'> Free Trial </span> For Our Apps
                        </h2>
                        <p className=' text-sm'>
                        Explore our VPN app with a complimentary 2-day trial period. We're confident you'll find it 100% satisfying. Should you decide otherwise, rest easy – cancel before the trial's end, and no charges will apply.</p>
                        
                    </>
                }
            /> 
            </div>
        </>
    )
}

export default Global