import React from 'react';

function CardPequeno(props) {
    return <div className="card-pequeno-container">
        <img src={props.imagem} />
        <div>
            <p>{props.texto}</p>
            <p>{props.email}</p>
            <p>{props.endereco}</p>
        </div>
    </div>
}

export default CardPequeno;