import React from 'react';
import Footer from '../Footer';
import './style.css';

const Layout = (props) => {
    return(
        <>
            <div className="container">
                {props.children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout