import React, { useEffect, useState } from 'react'
import FlexRow from '../Layout/FlexRow'
import Svgs from '../../Svgs'
import { HeaderData } from '../../Data'
import Form from '../Form'
import { useNavigate } from 'react-router-dom'
import { clearCookie, getToken } from '../../Actions/Cookies'
import useAuth from '../../Actions/Auth'
import { toast } from 'react-toastify'
import FlexCol from '../Layout/FlexCol'

const Header = () => {
  const naviagte = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [UserData, setUserData] = useState({});
  const [Loading, setLoading] = useState(false);

  const token = getToken();
  const { getUserData, General } = useAuth();

  useEffect(() => {
    if (token) {
      getUserData(setUserData, setIsLogin, setLoading)
    }
  }, [])

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [GetApi, setGetApi] = useState(false);
  const [IsProtected, setIsProtected] = useState(false);

  useEffect(() => {
    General(setGetApi, setIsProtected);
  }, [])


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };



  return (
    <header>       
      <navbar className='sticky top-0' >
        <div className="container  pt-4 pb-6">
          <div className={'grid lg:grid-cols-3 grid-cols-2 gap-5'}>
            <div>
              
              <img src={`${process.env.PUBLIC_URL}/Assets/Images/Bard VPN.png`} alt='logo'  />
            </div>
            <FlexRow  className='lg:flex hidden gap-[3rem] justify-center'>
              {
                HeaderData.map(item => {
                  return <div onClick={() => {
                    naviagte(item.url)
                  }} className='cursor-pointer border-b-[2px] border-transparent transition-all hover:border-b-[#C73131]'>{item.name}</div>
                })
              }
            </FlexRow>
            <FlexRow className={'lg:flex hidden justify-end'}>
              {
                Loading ? <div className='flex items-center gap-2'>
                  <div className='h-[2rem] w-[2rem] rounded-md animate-pulse bg-gray-800'></div>
                  <div className='h-[2rem] w-[5rem] rounded-md animate-pulse bg-gray-800'></div>
                </div>
                  : isLogin && Object.keys(UserData).length > 0 ? <>
                    <div className='flex items-center gap-3'>
                      <div>
                        <h1 className='text-[#C73131]'>{UserData?.user?.name}</h1>
                      </div>
                      <div className='h-[3rem] w-[3rem] rounded-full overflow-hidden'>
                        <img src={UserData?.user?.profile_photo_url} alt='img' className="h-full w-full object-contain" />
                      </div>
                      <div className='cursor-pointer' title='Logout' onClick={() => {
                        clearCookie('token')
                        setIsLogin(false);
                        toast.success('Logged out successfully!');
                      }}>
                        <Svgs.Logout />
                      </div>
                    </div>
                  </> :
                    <Form.Button onClick={() => {
                      naviagte("/login")
                    }} text={'Log in'} />
              }
            </FlexRow>

            <button onClick={toggleMenu} className="lg:hidden ml-auto" type="button">
              <Svgs.Hamburger />
            </button>
          </div>
        </div>
      </navbar>



      {
        isMenuOpen && <div onClick={toggleMenu} className="bg-gray-900/80 fixed inset-0 z-30"></div>
      }

      <div className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${!isMenuOpen && 'translate-x-full'} w-full bg-gray-800/60 backdrop-blur-md`}>
        <div className='flex flex-col gap-[3rem] h-full justify-between'>
          <div className='flex items-center justify-between'>
            
            <img src={`${process.env.PUBLIC_URL}/Assets/Images/octo-shield-white.png`} alt='img' className='h-[3rem]' />

            <div onClick={toggleMenu}>
              <Svgs.Close />
            </div>
          </div>

          <FlexCol>
            <FlexRow className='justify-center !gap-4 flex-wrap'>
              {
                HeaderData.map(item => {
                  return <div onClick={() => {
                    naviagte(item.url)
                  }} className='cursor-pointer text-2xl font-semibold'>{item.name}</div>
                })
              }
            </FlexRow>
          </FlexCol>
          <div>
            {
              Loading ? <div className='flex items-center gap-2 justify-center'>
                <div className='h-[2rem] w-[2rem] rounded-md animate-pulse bg-gray-200'></div>
                <div className='h-[2rem] w-[5rem] rounded-md animate-pulse bg-gray-200'></div>
              </div>
                : isLogin && Object.keys(UserData).length > 0 ? <>
                  <div className='flex items-center gap-3 justify-center'>
                    <div>
                      <h1 className='text-[#C73131]'>{UserData?.user?.name}</h1>
                    </div>
                    <div className='h-[3rem] w-[3rem] rounded-full overflow-hidden'>
                      <img src={UserData?.user?.profile_photo_url} alt='img'className="h-full w-full object-contain" />
                    </div>
                    <div className='cursor-pointer' title='Logout' onClick={() => {
                      clearCookie('token')
                      setIsLogin(false);
                      toast.success('Logged out successfully!');
                    }}>
                      <Svgs.Logout />
                    </div>
                  </div>
                </> : <div className='flex items-center justify-center'>
                  <Form.Button  className={'max-w-[18.75rem] w-full'} onClick={() => {
                    naviagte("/Price")
                  }} text={'Order VPN'} />
                </div>
            }
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header