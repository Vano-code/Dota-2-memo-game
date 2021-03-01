import React from 'react';

const Card = (props) => {

    const click = () => {
        props.click(props.back)
    }

    const check = () => {
        if(props.back === props.currentBack){
            return {
                backgroundColor: "brown",
                backgroundImage: `url(${imageUrl})`
            }
        }else{
            return {
                backgroundImage: `url(${imageUrl})`
            }
        }
    }

    const imageUrl = require(`../../../img/backs/${props.back}`);
    return <div style={check()} onClick={click} className="settings-card">
    </div>
}

export default Card;