import React from 'react'
import FlexRow from '../Layout/FlexRow'

import Svgs from '../../Svgs'
import { useNavigate } from 'react-router-dom'
import Form from '../Form'
const Button = () => {
    const naviagte = useNavigate();
    return (
        <div data-aos="fade-left" >
        <FlexRow className='gap-4' >
        <div style={{cursor: 'pointer'}}>
        <img src={`${process.env.PUBLIC_URL}/Assets/Images/Apple-store.png`} alt="Chevron Start" 
             onClick={() => {
              window.open("https://apps.apple.com/us/app/octovault-vpn/id6445982276", '_blank');
               }} ></img>           
              
        </div>
         <div style={{cursor: 'pointer'}}>
          <img  src={`${process.env.PUBLIC_URL}/Assets/Images/google-play.png`} alt="Chevron Start" 
             onClick={() => {
              window.open("https://play.google.com/store/apps/details?id=com.kolpolok.octo8vault&hl=en&gl=US&pli=1", '_blank');}}

            />
        </div>
    

    </FlexRow>
        
        <div  style={{ paddingTop: '2rem', paddingLeft: '7rem' }} >
            <Form.Button className='rounded-full'onClick={() => {
               naviagte("/Price")
               }} >
                <FlexRow className='text-sm'>
                    <h1>Order VPN</h1>
                    
                    <Svgs.ChevronStart />
                </FlexRow>
            </Form.Button>
        </div>
        </div>
        )
}

export default Button;