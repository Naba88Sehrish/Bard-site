import Svgs from '../../Svgs'
import { useNavigate } from 'react-router-dom'
import FlexRow from './FlexRow'
import Form from '../Form'


const AuthLayout = ({ children }) => {
    const naviagte = useNavigate();
    return (
        <>
            <div className=' top-0 left-0 right-0  flex items-center justify-between flex-row overflow-auto bg-white p-4'
            style={{  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', }}>
            
                <div className=' cursor-pointer flex items-center  ml-20'>
                    {/* <Svgs.Logo /> */}
                    <img src={`${process.env.PUBLIC_URL}/Assets/Images/Bard VPN.png`} alt='img' className='h-[1.5rem]' />
                    
                </div>
                <div className=' cursor-pointer flex items-center  mr-20 '><Form.Button onClick={() => {
                      naviagte("/")
                    }} text={'Back to site'} /></div>
               
            </div>
            
            <div className='min-h-screen flex items-center justify-center  overflow-auto'>
                <div className=' flex-row'>{children}</div>
            </div>
            <div className=' bottom-0 mt-20 left-0 right-0 '>
                <div className=' ml-auto'>
                    <Svgs.Lines />
                </div>
                <div className='flex items-center justify-center py-4'>
                    <FlexRow className={'text-[#CC1919] text-sm gap-7 font-semibold'}>
                        <div className='cursor-pointer'
                        >
                            <h2 onClick={() => {
                      naviagte("/terms")
                    }}>Terms of Service</h2>
                        </div>
                        <div className='cursor-pointer'>
                            <h2 onClick={() => {
                      naviagte("/privacy-policy")
                    }}>Privacy Policy</h2>
                        </div>
                    </FlexRow>
                </div>
            </div>
        </>
    )
}

export default AuthLayout