import React from 'react';
import CardOfGame from './game-card';

const RowCardContainer = (props) => {
    const list = [];
    for(let i = 0; i < props.width; i++){
        list.push(<CardOfGame key={i + 100} indexB={i + 1} indexA={props.index}/>)
    }
    return <div className='RowCardContainer'>{list}</div>
}

export default RowCardContainer;