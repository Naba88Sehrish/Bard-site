import React from 'react'
import Layout from '../../Components/Layout'
import Button from '../../Components/Common/Button'
const PrivacyPolicy = () => {
    return (
        <Layout>
            <div className='my-[5rem] justify-center item-center '>
                <div className='container text-center '>
                    
                        <div className='col-span-2'>
                            <div className='sticky top-[2rem]'>
                                <h1 className='text-[2rem] font-semibold text-[#FACA7F]'>Privacy Policy</h1>
                                <div className="border-b my-10 border-white "> </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex flex-col gap-6 text-lg'>
                                <div className='flex flex-col gap-2 '>
                                    
                                    <p>This Privacy Policy explains how Bard VPN collects, uses, and protects your personal information when you use our VPN services. By using our services, you consent to the practices described in this policy.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Information We Collect</h1>
                                    <p>
                                    We may collect personal information including, but not limited to, your name, email address, payment details, and device information when you sign up for our services.

                                        </p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>How We Use Your Information</h1>
                                    <p>We use your information to provide, maintain, and improve our services, to communicate with you, and to send you updates, promotions, and relevant information.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Data Security</h1>
                                    <p>We take reasonable measures to protect your data from unauthorized access, disclosure, or loss. However, no method of transmission over the internet is completely secure.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Data Sharing</h1>
                                    <p>We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who help us deliver our services effectively.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Security</h1>
                                    <p>We take reasonable measures to protect personal information from loss, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Retention of Data</h1>
                                    <p>We retain your personal information for as long as necessary to provide the services and fulfill our legal obligations.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Your Rights</h1>
                                    <p> You have the right to access, correct, and delete your personal information. You can also opt-out of receiving marketing communications.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Cookies and Tracking</h1>
                                    <p>We may use cookies and similar technologies to analyze usage and improve our services. You can control cookies through your browser settings.
                                    </p>
                                    
                                </div>  <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Changes to this Policy</h1>
                                    <p>We may update this policy from time to time. Any changes will be posted on our website, and you agree to the updated policy by continuing to use our services.
                                    </p>
                                    
                                </div>  <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Contact Us</h1>
                                    <p>If you have questions about this Privacy Policy, you can contact us at
                                    <span className='text-[#FACA7F]'> admin@octoshieldvpn.com </span>  
                                    </p>
                                    
                                </div>

                               

                            </div>  
                        </div> 
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Button />
    </div>
        </Layout>
    )
}

export default PrivacyPolicy