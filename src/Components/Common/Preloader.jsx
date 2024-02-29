import React from 'react'

const Preloader = () => {
    return (
        <div className='flex items-center justify-center h-screen fixed inset-0 bg-[#040209]/80 backdrop-blur-md z-[99999]'>
            <div className='flex items-center'>
                <img className='h-[4rem] object-contain' src={`${process.env.PUBLIC_URL}/Assets/Images/Bard VPN-logo.png`} alt='logo'/>
            </div>
        </div>
    )
}

export default Preloader