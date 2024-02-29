import React from 'react'
import FlexCol from '../../Components/Layout/FlexCol'

import FlexRow from '../../Components/Layout/FlexRow'


const OnlinePresence = () => {
    return (
        <section>
            <div className='grid lg:grid-cols-2 gap-[2rem] py-[2rem]' data-aos="fade-right">
                <FlexCol className={'gap-[1.2rem] justify-center'}>
                    <h2 className='uppercase text-sm'>Protect Your Online Presence with </h2>
                    <FlexCol className={'gap-4'}>
                        <h2 className='font-extrabold text-[2.5rem] leading-[1.2]'>
                            <span className='text-[#FACA7F]'>
                                Octo Vault
                            </span>
                            <span>- The Blazing Fast, Uninterrupted and Secure VPN Service</span>
                        </h2>
                        <h2 className='text-[#4F4D52] text-sm'>
                            With Our Military-Grade Encryption, You Can Enjoy the Best VPN <br className='md:block hidden' /> Services Worldwide with Total Peace of Mind.
                        </h2>
                    </FlexCol>

                    <FlexRow className='gap-3'>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/Assets/Images/app-store.png`} className='h-[5rem] object-contain cursor-pointer' />
                        </div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/Assets/Images/google-play.png`} className='h-[5rem] object-contain cursor-pointer' />
                        </div>
                    </FlexRow>
                    <p className='italic'>7-Day Risk-Free Money-Back Guarantee</p>
                </FlexCol>
                <div className='flex items-center justify-center'>
                    <img src={`${process.env.PUBLIC_URL}/Assets/Images/OnlinePresence.png`} className="object-contain lg:h-[30rem] md:h-[22rem] h-[15rem]" />
                </div>
            </div>
        </section>
    )
}

export default OnlinePresence