import React from 'react';
 
function BroCard(props) {
  return(

    <div className="bro-card">
  <img className="card-img-top" src={props.thumbnail} alt="Card cap" style={{borderRadius: "5px"}} />
  <div className="card-body">
    <div className="text-center ">
    <a target="_blank" rel="noreferrer" href={"https://www.youtube.com/watch?v=" + props.videoId} className="btn btn-outline-warning btn-small">WATCH</a>
    </div>
    <h4 className="card-title text-warning text-uppercase" style={{marginTop: "25px"}}>{props.title}</h4>
    <p className="description card-text text-white" style={{ display:"inlineBlock", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{props.description}</p>
  </div>
</div>
  )
}

export default BroCard;