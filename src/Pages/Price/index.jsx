import React from 'react'
import Layout from '../../Components/Layout'
import Banner from '../../Components/Common/Banner'
import Pricing from '../../Pages/Home/Pricing.jsx'

import price from './price.json'
const Price = () => {
    return (
        <Layout>
            <Banner
            animationData={price}
               
                data={
                    <>
                        <h2 className='font-extrabold md:text-[3rem] text-[2.2rem] leading-[1.2]'>
                          Affordable Plans for
                            <br className='md:block hidden' />
                           <p className='text-[#CC1919]'>Digital Freedom</p> 
                        </h2>
                        <p className=' text-lg'>
                        Choose from Bard VPN's range of competitively priced plans to enjoy top-tier online protection without breaking the bank </p>
                        
                    </>
                }
                
            /> 
            <Pricing></Pricing>
        </Layout>
    )
}

export default Price