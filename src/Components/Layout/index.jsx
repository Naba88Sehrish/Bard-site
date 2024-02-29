import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, auth }) => {
    return (
        <div className='overflow-hidden'>
            {!auth && <Header />}
            <div className='container'>
                {children}
            </div>
            {!auth && <Footer />}
        </div>
    )
}

Layout.defaultProps = {
    auth: false
}

export default Layout