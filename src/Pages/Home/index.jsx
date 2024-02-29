import React from 'react'
import Layout from '../../Components/Layout'
import FAQS from './FAQS.jsx'
import WhyOpt from './WhyOpt.jsx'
import Global from './Global.jsx'

import Banner from '../../Components/Common/Banner'




const Home = () => {
    return (
        <Layout>
            <Banner
                img={'/Assets/Images/Main.png'}
                data={
                    <>
                        <h2 className='font-bold md:text-[3rem] text-[2.2rem] leading-[1.2]'>
                        Protect your Online 

                            <br className='md:block hidden' />
                            Activity and Security
                        </h2>
                        <p className='text-[#CC1919] text-lg'>
                        Browse the web without being tracked and protect your personal information with our top-rated encryption technology. </p>
                        
                    </>
                }
            /> <WhyOpt />
            <Global />
            <FAQS></FAQS>
        </Layout>
    )
}

export default Home