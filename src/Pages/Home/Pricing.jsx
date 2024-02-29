import React from 'react'
import FlexRow from '../../Components/Layout/FlexRow'
import Form from '../../Components/Form'
import Svgs from '../../Svgs'
import { useNavigate } from 'react-router-dom'



const Pricing = () => {
    const navigate = useNavigate();
    return (<>
    <div data-aos="zoom-in">
        <h2 className=' text-center  font-extrabold md:text-[3rem] text-[2.2rem] leading-[1.2]'>
                       Pricing
                        </h2>
        <FlexRow className=' text-center justify-center py-10 flex-wrap '>
        <div
    className="bg-white text-black flex flex-col items-center justify-center p-10"
    style={{ width: '350px', height: '500px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', }}
>
    <h2 className="text-xl font-bold mb-2">Free Trial</h2>
    <img src={`${process.env.PUBLIC_URL}/Assets/Images/Bard VPN.png`} alt='img' className=" object-contain " />
    <h3 className="text-xl mb-2">£0.00</h3>
    <h5 className="text-xl mb-2">for 2 days</h5>
  
    <div className="border-b my-2 border-black text-white"> hsgahfdhdfdfhfdhsdfjadgjadgadghfhfhf</div>
    <h2 className="text-xl font-bold mb-2">2 days Free Trail</h2>
    <p className="text-center">Access to free servers Increased connection speed No ads while surfing</p>
    
    <Form.Button className='rounded-full mt-5' onClick={() => { navigate('/Price'); }}>
        <FlexRow className='text-sm'>
            <h1>Order VPN</h1>
            <Svgs.ChevronStart />
        </FlexRow>
    </Form.Button>
</div>
<div
    className="bg-[#F3D9DA] text-black flex flex-col items-center justify-center p-10"
    style={{  width: '360px', height: '540px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', }}
>
    <h2 className="text-xl font-bold mb-2">Annually</h2>
    <img src={`${process.env.PUBLIC_URL}/Assets/Images/Bard VPN.png`} className=" object-contain "  alt='img'/>
    <h3 className="text-xl mb-2">£4.16</h3>
    <h5 className="text-xl mb-2">per month</h5>
  
    <div className="border-b my-2 border-black text-[#F3D9DA]"> hsgahfdhdfdfhfdhsdfjadgjadgadghfhfhf</div>
    <h2 className="text-xl font-bold mb-2">Billed £49.99 for 12 Months</h2>
    <p className="text-center">Access to all servers Increased connection speed No ads while surfing</p>
    <Form.Button className='rounded-full mt-5' onClick={() => { navigate('/Price'); }}>
        <FlexRow className='text-sm'>
            <h1>Order VPN</h1>
            <Svgs.ChevronStart />
        </FlexRow>
    </Form.Button>
   
</div>
<div
    className="bg-white text-black flex flex-col items-center justify-center p-10"
    style={{ width: '350px', height: '500px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', }}
>
    <h2 className="text-xl font-bold mb-2">Monthly</h2>
    <img src={`${process.env.PUBLIC_URL}/Assets/Images/Bard VPN.png`} className=" object-contain " alt='img' />
    <h3 className="text-xl mb-2">£4.99</h3>
    <h5 className="text-xl mb-2">per month</h5>
  
    <div className="border-b my-2 border-black text-white"> hsgahfdhdfdfhfdhsdfjadgjadgadghfhfhf</div>
    <h2 className="text-xl font-bold mb-2">Billed £4.99 Per Month</h2>
    <p className="text-center">Access to all servers Increased connection speed No ads while surfing</p>
    
    <Form.Button className='rounded-full mt-5' onClick={() => {  navigate('/Price'); }}>
        <FlexRow className='text-sm'>
            <h1>Order VPN</h1>
            <Svgs.ChevronStart />
        </FlexRow>
    </Form.Button>
</div>

        </FlexRow>
        </div> </>
            );
        };
        
        export default Pricing;