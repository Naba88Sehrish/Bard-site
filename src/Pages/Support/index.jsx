import React from 'react'
import Layout from '../../Components/Layout'

import Contact from '../../Components/Common/Contact'
import ContactForm from './Form';

const Support = () => {
    
    
    return (
        <>
            <Layout>
                
                        <><section className=" items-center text-center justify-center flex flex-col gap-5 h-full p-10">
                            <h2 data-aos="zoom-in" className='font-bold md:text-[3rem] text-[2.2rem] text-[#CC1919] leading-[1.2]'>
                            How can we help you?
                            </h2>
                            <p  className=' text-lg'>
                            Use your preferred method or platform to contact us. Any request can be answered by our team!
                            </p>
                           <Contact ></Contact>
                           <h2 data-aos="fade-left" className='font-semibold md:text-[2rem] text-[2.2rem] text-[#05477D] leading-[1.2]'>
                           Get In Touch
                            </h2>
                            <p className=' text-lg'>
                            Want to ask about something related our products or offers? Reach out to us right now!
                            </p> </section>
                          
                        </>
                    
              <ContactForm></ContactForm>
                
            </Layout>
           
        </>
    )
}

export default Support