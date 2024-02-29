import React from 'react'
import FlexRow from '../Layout/FlexRow'
import Svgs from '../../Svgs'





const Contact = () => {
    
    return (
<div data-aos="fade-right">
                <FlexRow >
                    <div onClick={() => {
              window.open("https://www.facebook.com", '_blank');
               }} className='border border-[#CC1919] rounded-lg p-2 cursor-pointer'>
                        <Svgs.Facebook />
                    </div>
                    <div  onClick={() => {
              window.open("https://www.instagram.com", '_blank');
               }} className='border border-[#CC1919] rounded-lg p-2 cursor-pointer'>
                        <Svgs.Instagram />
                    </div>
                    <div onClick={() => {
              window.open("https://www.linkdin.com", '_blank');
               }} className='border border-[#CC1919] rounded-lg p-2 cursor-pointer'>
                        <Svgs.Linkedin />
                    </div>
                    <div onClick={() => {
              window.open("https://www.twitter.com", '_blank');
               }} className='border border-[#CC1919] rounded-lg p-2 cursor-pointer'>
                        <Svgs.Twitter />
                    </div>
                    <div onClick={() => {
              window.open("https://www.whatsapp.com", '_blank');
               }} className='border border-[#CC1919] rounded-lg p-2 cursor-pointer'>
                    <Svgs.Whatsapp />
                       
                    </div><div onClick={() => {
              window.open("https://www.gmail.com", '_blank');
               }} className='border border-[#CC1919] rounded-lg p-2 cursor-pointer'>
                    <Svgs.Gmail />
                       
                    </div>
                    <div onClick={() => {
              window.open("https://www.telegram.com", '_blank');
               }} className='border border-[#CC1919] rounded-lg p-2 cursor-pointer'>
                         <Svgs.Telegram />
                       
                    </div>
                </FlexRow></div>
           
            )
        }
        
        export default Contact