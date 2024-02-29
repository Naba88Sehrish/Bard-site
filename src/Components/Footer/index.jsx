import React from 'react'
import FlexRow from '../Layout/FlexRow'
import Contact from '../Common/Contact'
import FlexCol from '../Layout/FlexCol'
import { FooterData } from '../../Data'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <div  className='md:grid flex flex-col items-center md:text-left text-center grid-cols-6 gap-20 container py-[5rem]'><FlexCol className={'gap-[2rem] col-span-2'}>
                    <div data-aos="fade-left">
                        
                        <img src={`${process.env.PUBLIC_URL}/Assets/Images/Bard VPN.png`} alt='img'className='h-[1.5rem]' />
                    </div><p data-aos="zoom-in" className='text-[#CC1919]'>Unlock Your Digital Freedom</p>
                    
                </FlexCol>
                
                {
                    FooterData.map(item => {
                        return <FlexCol className={'gap-[2rem]'}>
                            <h1>{item.title}</h1>
                            <FlexCol className={'text-[#4A4B4C]'}>
                                {
                                    item.list.map(li => <h1 onClick={() => navigate(li.url)} className='cursor-pointer hover:text-[#000000] w-fit transition-all'>{li.name}</h1>)
                                }
                            </FlexCol>
                        </FlexCol>
                    })
                }
                <FlexCol className={'gap-[2rem] col-span-2'}>
                
                <h1 className='text-[#000000] ml-20'>Follow Us</h1>
                <Contact></Contact> </FlexCol>
            </div>
            <div className='border-t border-[#000000]'>
                <div className='container py-3'>
                    <FlexRow className='md:justify-between justify-center gap-4 flex-wrap'>
                        <div >
                            <h2 className='text-[#000000] text-sm font-semibold md:text-left'> © 2023 Bard</h2>
                        </div>
                        <h2  className='text-[#000000] text-sm font-semibold md:text-left'> All rights Reserved</h2>
                    </FlexRow>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer