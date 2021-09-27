import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import NavBar from '../NavBar';

const Menu = (props) => {
  return(
    <div>
        <Card>
            <div style={{ padding: '50px 0' }}>
                <Logo />
            </div>
            <NavBar/>
        </Card>
    </div>
   )

 }

export default Menu