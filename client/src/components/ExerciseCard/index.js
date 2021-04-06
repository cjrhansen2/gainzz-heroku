import React from 'react';

function SEbutton(props) {
  return(
    
<div className="clearfix exercise card text-center mx-auto bg-dark" data-id={props.id} data-name={props.name} >
  <div className="card-body text-white">

  
    <h3 >{props.exercisename}</h3>
    <p className='card-text text-uppercase' style={{opacity: '0.7'}}>{props.exercisetype}</p>
    {props.children}
  </div>
</div>

  )
};

export default SEbutton;