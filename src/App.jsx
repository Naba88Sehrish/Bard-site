import React, { useEffect } from 'react';
import MainRouter from './Router/MainRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Preloader from './Components/Common/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can import the styles as well

function App() {
  const [Loader, setLoader] = useState(true)
  useEffect(() => {
    
    AOS.init();

    setTimeout(() => {
      setLoader(false);
    }, 1400);
  }, [])

  return <>
    {
      Loader && <Preloader />
    }
    <ToastContainer
      position='top-right'
      autoClose={2000}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
    />
    <MainRouter />
  </>
}

export default App;