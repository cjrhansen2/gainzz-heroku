/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import DetailsTable from '../../components/DetailsTable/index';
import TableRow from '../../components/TableRow/index';
import AddDetailsForm from '../../components/AddDetailsForm';
import DeleteExercise from '../../components/DeleteExercise';

var dayjs = require('dayjs');

function Container(props) {
  
  const [detail, setDetail] = useState({
    sets: '',
    reps: '',
    weight: '',
  });
  const [allDetails, setAllDetails] = useState([]);
  const [addDetail, setAddDetail] = useState(true);

  var date;
  
  if (allDetails) {
  date = dayjs(detail.date).format('MM/DD/YYYY');
  // eslint-disable-next-line no-unused-vars
  } else { date = ""}

  useEffect(() => {
    findAllDetails()
  }, [])

  //find an exercise by id and populates its details.
  function findAllDetails() {

    let id = props.id

    API.populateExerciseDetails(id)
      .then((res) => {
        console.log(res.data[0].exerciseDetails.length)
        if (res.data[0].exerciseDetails.length === 0) {
          return;
        }

        let deets = res.data[0].exerciseDetails;
        let mostRecentDeet = deets[deets.length - 1];
        console.log(deets);

        setDetail(mostRecentDeet);
        setAllDetails(deets);
        
      })
  }

  const onClickSetAddDetails = () => {
    setAddDetail(true);
    findAllDetails();
  }

  return (
    <div>     
      <div className="details card text-center mx-auto border-0">
        
        <div className="card-body bg-dark text-white">
          
          <h3 style={{color: "#ffc107", marginTop: "15px", fontSize: "35px"}}>{props.name}</h3>
          
        </div>
      </div>
      <br/>
      <DetailsTable>
        {allDetails.map((deet) => (
        <TableRow 
        date={dayjs(deet.date).format('MM/DD/YYYY')}
        sets={deet.sets}
        reps={deet.reps}
        weight={deet.weight}
        id={deet._id}
        key={deet._id}
        findAllDetails={findAllDetails}
        />))}
      </DetailsTable>
        {addDetail ?
      <button className="btn btn-lg btn-dark btn-block text-uppercase" 
    onClick={() => setAddDetail(false)}>Add Detail</button>
    :
    <AddDetailsForm 
    id={props.id}
    setAddDetail={onClickSetAddDetails}/>
    
}   
  <DeleteExercise
  id={props.id}/>
  </div>
  )
}

export default Container;