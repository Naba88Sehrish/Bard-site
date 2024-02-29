import React from 'react'
import Layout from '../../Components/Layout'
import Button from '../../Components/Common/Button'
const Terms = () => {
    return (
        <Layout>
            <div className='my-[5rem] justify-center item-center '>
                <div className='container text-center '>
                    
                        <div className='col-span-2'>
                            <div className='sticky top-[2rem]'>
                                <h1 className='text-[2rem] font-semibold text-[#FACA7F]'>Terms & Conditions</h1>
                                <div className="border-b my-10 border-white "> </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex flex-col gap-6 text-lg'>
                                <div className='flex flex-col gap-2 '>
                                    
                                    <p>Please read these terms and conditions carefully before using Bard VPN services. By using our services, you agree to these terms.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Use of Services</h1>
                                    <p>
                                    You agree to use Bard VPN services only for lawful purposes. You will not engage in any activity that interferes with or disrupts the services or networks connected to the services.

                                        </p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Account Information</h1>
                                    <p>You are responsible for maintaining the confidentiality of your account information, including passwords and payment details. You agree to notify us immediately of any unauthorized use of your account.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Payment and Billing</h1>
                                    <p>Payments for our services are non-refundable. By subscribing to our services, you agree to recurring billing at the specified intervals. Failure to pay may result in suspension or termination of your account.
</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Data Security</h1>
                                    <p>While we take reasonable measures to protect your data, we cannot guarantee absolute security. You acknowledge that any transmission of data is at your own risk.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Prohibited Activities</h1>
                                    <p>You will not engage in any activity that violates applicable laws or regulations, infringes upon the rights of others, or compromises the security or integrity of our services.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Limitation of Liability</h1>
                                    <p>Bard VPN and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Changes to Services</h1>
                                    <p>We reserve the right to modify, suspend, or discontinue our services at any time without prior notice.</p>
                                </div>


                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Intellectual Property</h1>
                                    <p>All content, logos, and trademarks used in connection with our services are owned by Bard VPN. You may not use or reproduce these without our explicit permission.
                                    </p>
                                    
                                </div>  <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'> Governing Law</h1>
                                    <p>These terms and conditions are governed by the laws. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts.
                                    </p>
                                    
                                </div> <div className='flex flex-col gap-2'>
                                    <h1 className='text-[#FACA7F] text-base'>Changes to Terms</h1>
                                    <p>We may update these terms and conditions from time to time. Changes will be posted on our website, and continued use of our services constitutes your acceptance of the updated terms.
                                    </p>
                                    
                                </div> <div className='flex flex-col gap-2'>
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

export default Terms