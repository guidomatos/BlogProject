import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

const RecentPosts = (props) => {
    return(
        <div style={props.style}>
            <Card style={{marginBottom: '20px'}}>
                <div className="postImageWrapper">
                <img src={"https://wallpaperaccess.com/full/3949076.jpg"} alt=""/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <span>Tecnología</span>
                    <h2>React</h2>
                    <span>Publicado el 21 de julio del 2016</span>
                    <p>
                        React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.
                    </p>
                </div>
            </Card>
        </div>
    )
}
export default RecentPosts