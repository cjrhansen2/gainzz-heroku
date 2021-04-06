import React from 'react';
import './style.css';

function CardLink(props) {

    return (
        <div className="cardlink mb-5 mb-lg-0"   style={props.style}>
            <div className="card-body">
                <div to={"/" + props.link} className="btn text-white text-uppercase" style={{fontSize: '', backgroundColor: "#5f6975"}}>{props.title}</div>
            </div>
        </div>
    )
}

export default CardLink;