import React from 'react';
import './style.css';
import Card from '../UI/Card';

const SideBar = (props) => {

    return(
        <div className="sidebarContainer" style={{
            width: props.width
        }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">Mi nombre es Guido Matos Soy un Desarrollador de Software especializado en React y .NET....:)</p>
                </div>
            </Card>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Redes Sociales</span>
                </div>
            </Card>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Publicaciones Recientes</span>
                </div>
                <div className="recentPosts">
                    
                </div>
            </Card>
        </div>
    )

}

export default SideBar