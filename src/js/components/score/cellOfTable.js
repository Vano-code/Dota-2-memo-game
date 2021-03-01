import React from 'react';

const CellOfTable = (props) =>{
    return <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.score}</td>
    </tr>
}

export default CellOfTable;