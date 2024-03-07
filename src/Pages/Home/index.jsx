import React from 'react'
import Layout from '../../Components/Layout'
import FAQS from './FAQS.jsx'
import WhyOpt from './WhyOpt.jsx'
import Global from './Global.jsx'
import Banner from '../../Components/Common/Banner'
import Main from './Main.json'


const Home = () => {
    return (
        <Layout>
            <Banner
                animationData={Main}
                data={
                    <>
                     <h2 className='font-extrabold md:text-[3rem] text-[2.2rem] leading-[1.2]'>
                     Protect your Online
                            <br className='md:block hidden' />
                           <p className='text-[#CC1919]'> Activity and Security</p> 
                        </h2>
                        
                        <p className='text-[#05477D] text-lg'>
                            Browse the web without being tracked and protect your personal information with our top-rated encryption technology. </p>

                    </>
                }
            /> <WhyOpt />
            <Global />
            <FAQS ></FAQS>
        </Layout>
    )
}
export default Home