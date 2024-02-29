import React from 'react'
import Banner from '../../Components/Common/Banner'
import Platform from './Platform'

import Layout from '../../Components/Layout'




const Download = () => {
    
   
    return (
        <Layout>
            <Banner
                img={'/Assets/Images/Hero-image-opt 1.png'}
                data={
                    <>
                        <h2 className='font-extrabold md:text-[3rem] text-[2.2rem] leading-[1.2]'>
                        Your Gateway to
                        <h4 className='font-extrabold md:text-[3rem] text-[2.2rem] text-[#CC1919] text leading-[1.2]'>
                        Secure Browsing
                        </h4></h2>
                        <p className=' text-lg'>
                        Access Bard VPN's download page to secure your online journey with our trusted VPN client. Protect your data today.
                        </p>
                        
                    </>
                }
            />
            <section>
                <Platform></Platform>
            </section>

           

        </Layout>
    )
}

export default Download