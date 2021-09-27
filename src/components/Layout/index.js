import React from 'react';
import Footer from '../Footer';
import SideBar from '../Sidebar';
import './style.css';

const Layout = (props) => {
    return(
        <>
            <div className="container">
                {props.children}
                <SideBar/>
            </div>
            <Footer/>
        </>
    )
}

export default Layout