import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import API from '../../utils/API';
import jwt_decode from "jwt-decode";
import FontAwesome from 'react-fontawesome';

function AddExerciseForm(props) {

  const user = (jwt_decode(localStorage.jwtToken));
  const history = useHistory();
  const [value, setValue] = useState();
  const exerciseNameRef = useRef();

  function redirectHome() {
    //change to the allexercise route
    history.push("/workouts");
  }

  function onChange(e) {
    setValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let exercise = {
      type: value,
      name: exerciseNameRef.current.value,
      userId: user.id
    }

    API.addExercise(exercise)
    .then((res) => {
      console.log(res);
      redirectHome();
    })
    .catch((err) => console.log(err))
  };


  return (
    <div className=" add-exercise card card-addexe ">
      <div className="card-body mx-auto">
        <h5 className="card-title text-center">Add an Exercise</h5>
        <form className="form-signin">
          <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
            
          </label>
          <select
            className="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            value={value}
            onChange={onChange}
            
          >
            <option value="">Select Muscle Group</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">Triceps</option>
            <option value="shoulders">Shoulders</option>
            <option value="legs">Legs</option>
            <option value="core">Core</option>
          </select>

          <div className="addexe form-label-group">
            <input
              type="text"
              ref={exerciseNameRef}
              id="inputPassword"
              className="form-control"
              placeholder="Exercise Name"
              required
            />
            <label htmlFor="inputPassword"></label>
          </div>

          <hr />

          <button
            className="btn btn-lg btn-dark btn-block text-uppercase"
            type="submit"
            onClick={handleSubmit}
          >
            Add
            <FontAwesome
            className="super-crazy-colors"
            name="plus"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
            />
          </button>

          <Link className="d-block text-center mt-2 small" to="/workouts">
            All Exercises
          </Link>
        </form>
      </div>
    </div>
  );
}
export default AddExerciseForm;
