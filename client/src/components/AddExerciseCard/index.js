import React from 'react';
import { Link } from "react-router-dom"
import FontAwesome from 'react-fontawesome'
import "./style.css"


function AddBtn(props) {
  return(
    
<div className=" add-exerciseBtn card text-center mx-auto bg-transparent ">
 
  <Link to='/create' className=" addbtn btn  text-white bg-transparent border-0">Add Exercise
      <FontAwesome
      className="super-crazy-colors"
      name="plus"
      style={{  color: "white" }}
      />
  </Link>
  
</div>

  )
};

export default AddBtn;