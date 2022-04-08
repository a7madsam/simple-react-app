import React from "react";
import './Card.css'

const Card = (props) => {
    let c = "card " + props.className;
    return (
        <div className={c}>
            {props.children}
        </div>
    );
}
export default Card;