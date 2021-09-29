import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

    return(
        <div className="sidebarContainer" style={{
            width: props.width
        }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Acerda de mí</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG7dRCLLkWuqw/profile-displayphoto-shrink_800_800/0/1570298897955?e=1638403200&v=beta&t=TG351sr-Hd2IivRI0sGNh8RkJNGzY2F8XaBJdHNrZEA" alt="" />
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
                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>
            </Card>
        </div>
    )

}

export default SideBar