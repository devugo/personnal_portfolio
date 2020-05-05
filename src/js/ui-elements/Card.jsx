import React from 'react';

const Card = props => {
    return (
        <div style={{...props.style}} id={props.id} className={`devugo-card ${props.className}`}>{props.children}</div>
    )
}

export default Card;