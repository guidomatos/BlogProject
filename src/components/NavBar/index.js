import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import buscarLogo from '../../assets/icons/search.png';

const NavBar = (props) => {

    const [search, setsearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
    }

    const openSearch = () => {
        setsearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/nosotros">Acerca de nosotros</NavLink></li>
                <li><NavLink to="/publicaciones">Publicaciones</NavLink></li>
                <li><NavLink to="/contactenos">Contáctenos</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Buscar" />
                    <img onClick={openSearch} className="searchIcon" src={buscarLogo} alt="Buscar" />
                </form>
                
            </div>
        </div>
    )

}

export default NavBar