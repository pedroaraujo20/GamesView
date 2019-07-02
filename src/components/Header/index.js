import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <div className="navbar">
            <h1><img src={require('../../assets/joystick.png')} className="joystick" />GamesView</h1>
            <div className="areaBusca">
            <input type="text" className="busca" placeholder="Buscar jogos..."/>            
            </div>
            <a href="#">Login</a>
            <div className="socialmedia">
                <a href="#"><img src={require('../../assets/facebook.png')}/></a>
                <a href="#"><img src={require('../../assets/instagram.png')}/></a>
                <a href="#"><img src={require('../../assets/twitter.png')}/></a>
                <a href="#"><img src={require('../../assets/youtube.png')}/></a>
            </div>
        </div>
    );
}

export default Header;