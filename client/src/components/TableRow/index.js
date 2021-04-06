import React from 'react';
import DeleteButton from '../DeleteButton/index';

function TableRow(props) {
  return(

    <tr>
      <th scope="row">{props.date}</th>
      <td>{props.sets}</td>
      <td>{props.reps}</td>
      <td>{props.weight}</td>
      <td><DeleteButton
      id={props.id}
      findAllDetails={props.findAllDetails}
      /></td>
    </tr>
  )
}

export default TableRow;