import React from 'react';

const DiffButton = (props) => {
    
    const pick = () => {
        props.click(props.width, props.height);
    }
    const check = () => {
        if(props.width === props.currentWidth){
            return {
                color: "blue",
                backgroundColor: "brown"
            }
        }
    }

    return <button style={check()} onClick={pick} className="diff-button">{props.height} X {props.width} </button>
}

export default DiffButton;