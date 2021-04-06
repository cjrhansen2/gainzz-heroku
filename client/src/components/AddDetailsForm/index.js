import React, { useRef } from 'react';
import API from '../../utils/API';

function AddDetailsForm(props) {
  
  const setRef = useRef();
  const repRef = useRef();
  const weightRef = useRef();

  const handleSubmit = async e => {
      e.preventDefault();

      const set = setRef.current.value;
      const rep = repRef.current.value;
      const weight = weightRef.current.value;

      try {

        API.addDetail({
          sets: set,
          reps: rep,
          weight: weight,
          userId: props.id
        }).then(res => {
          props.setAddDetail();
        })

      } catch(err) {

           // Handle error responses from the API. This will include
           if( err.response && err.response.data ) console.log(err.response.data);

      }

  }

  return(

    <div className="add-details bg-light ">
      <div className="card-body d-flex justify-content-center" >
        <form className="form-signin">
          <div className="form-label-group">
            <input type="number" ref={setRef} id="sets" className="form-control" placeholder="Sets" required autoFocus/>
            <label htmlFor="sets"></label>
          </div>
            
          <div className="form-label-group">
            <input type="number" ref={repRef} id="reps" className="form-control" placeholder="Reps" />
            <label htmlFor="reps"></label>
          </div>
            
          <div className="form-label-group">
            <input type="text" ref={weightRef} id="weights" className="form-control" placeholder="Weight" required/>
            <label htmlFor="weights"></label>
          </div>
            
          <div className="button-box col-lg-12">
            <button className="btn btn-warning text-uppercase text-center text-dark " 
              type="submit" onClick={handleSubmit}>Add Detail</button>
              <button className=" btn btn-danger " onClick={props.setAddDetail}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDetailsForm;