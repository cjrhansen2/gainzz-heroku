import React from 'react';

 function DetailsTable(props) {
   return(
<table className="table">
  <thead className="thead" >
    <tr>
      <th scope="col" style={{color: "white", fontSize: "20px"}}>Date</th>
      <th scope="col" style={{color: "white", fontSize: "20px"}}>Sets</th>
      <th scope="col" style={{color: "white", fontSize: "20px"}}>Reps</th>
      <th scope="col" style={{color: "white", fontSize: "20px"}}>Weight</th>
      <th scope="col" style={{color: "white", fontSize: "20px"}}></th>
    </tr>
  </thead>
  <tbody className="tableBody">
    {props.children}
  </tbody>
</table>
   )
 }

 export default DetailsTable;