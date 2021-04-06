import React from 'react';
import API from '../../utils/API';
import { useHistory } from 'react-router-dom';

function DeleteExercise(props) {

  const history = useHistory();

  function redirecttoAllExercises() {
    history.push("/home");
}

    function deleteExercise(e) {
      let id = e.target.getAttribute('id')
  
      API.deleteExercise(id)
        .then((res) => {
          console.log(res)
         redirecttoAllExercises();
        })
        .catch(err => console.log(err))

    }
    
  
    return(
      <div className="d-flex justify-content-center">
        <button className=" deleteXbtn btn btn-xs btn-outline-danger "  onClick={deleteExercise} id={props.id}>Delete Exercise</button>
      </div>
    )
  }

  export default DeleteExercise;