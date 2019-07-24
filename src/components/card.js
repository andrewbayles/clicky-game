import React from "react";

function Card(props) {
    return(
        <div className="gameCard" style="width:300px;height:300px;margin:20px;background:#CCCCCC;background-image: url('/assets/{props.cardImage}')">

        </div>
    )
}

export default Card;