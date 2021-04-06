import React from 'react';
import API from '../../utils/API';

function DeleteButton(props) {

  function deleteDetail(e) {
    let id = e.target.getAttribute('data-id')

    API.deleteDetail(id)
      .then((res) => {
        console.log(res)
        props.findAllDetails()
      })
      .catch(err => console.log(err))
  }

  return(
    <div className="btn btn-outline-danger btn-sm" onClick={deleteDetail} data-id={props.id}>Delete</div>
  )
}

export default DeleteButton;
