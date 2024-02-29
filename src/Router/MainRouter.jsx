import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

import Price from '../Pages/Price';
import FAQS from '../Pages/Home/FAQS';
import Support from '../Pages/Support';
import Download from '../Pages/Download';

import Terms from '../Pages/Terms';

import PrivacyPolicy from '../Pages/Privacy/PrivacyPolicy';

function MainRouter() {
    return (
        <Router>
            <Routes>
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
