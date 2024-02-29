import Svgs from '../../Svgs'
import FlexRow from './FlexRow'

const AuthLayout = ({ children }) => {
    return (
        <>
            <div className='fixed top-0 left-0 right-0'>
                <div className='w-fit cursor-pointer mx-auto py-[3rem]'>
                    {/* <Svgs.Logo /> */}
                    <img src={`${process.env.PUBLIC_URL}/Assets/Images/octo-shield-white.png`} alt='img' className='h-[3rem]' />
                </div>
            </div>
            <div className='min-h-screen flex items-center justify-center flex-col overflow-auto'>
                <div className='w-[19rem]'>{children}</div>
            </div>
            <div className='fixed bottom-0 left-0 right-0'>
                <div className='w-fit ml-auto'>
                    <Svgs.Lines />
                </div>
                <div className='flex items-center justify-center py-4'>
                    <FlexRow className={'text-[#CC1919] text-sm gap-7 font-semibold'}>
                        <div className='cursor-pointer'>
                            <h2>Terms of Service</h2>
                        </div>
                        <div className='cursor-pointer'>
                            <h2>Privacy Policy</h2>
                        </div>
                    </FlexRow>
                </div>
            </div>
        </>
    )
}

export default AuthLayout