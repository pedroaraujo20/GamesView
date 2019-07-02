import React, { Component } from 'react';
import './styles.css';
const listGames = require('../../games.json');


class Games extends Component {      

    render() {
        return (
            <div className="gamesArea">
                {listGames.map(list =>(
                <article key={list.id}> 
                    <img src={list.image} alt="game"/>                                             
                    <h1>{list.nome}</h1>                    
                    <p><strong>Nota:</strong> {list.nota}</p>
                    <p><strong>Descrição:</strong> {list.descricao}</p>
                    <p><strong>Review:</strong> <a href={list.link}>Vídeo</a></p>
                </article>
                ))}
            </div>
        );
    }
}

export default Games;