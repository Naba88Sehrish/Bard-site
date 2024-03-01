import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Auth/Login';
import Price from '../Pages/Price';
import FAQS from '../Pages/Home/FAQS';
import Support from '../Pages/Support';
import Download from '../Pages/Download';
import NotFound from '../Pages/NotFound';
import Terms from '../Pages/Terms';
import Register from '../Pages/Auth/Register';
import Forgot from '../Pages/Auth/Forgot';
import Reset from '../Pages/Auth/Reset';
import VerifyCode from '../Pages/Auth/VerifyCode';

import PrivacyPolicy from '../Pages/Privacy/PrivacyPolicy';

function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<Forgot />} />
                <Route path="/reset" element={<Reset />} />
                <Route path="/verify" element={<VerifyCode />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/Price" element={<Price />} />
                <Route path="/support" element={<Support />} />
                <Route path="/App" element={<Download />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/faq" element={<FAQS />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
               

               
            </Routes>
        </Router>
    );
}

export default MainRouter;
