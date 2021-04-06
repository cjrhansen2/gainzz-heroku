/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Col, Row, Container } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import CardLink from '../../components/CardLink';
//import { useAuthenticatedUser } from '../../utils/auth';

import ExerciseCard from "../../components/ExerciseCard/index";
import API from "../../utils/API";
import ExerciseDetails from '../ExerciseDetails/index';
import jwt_decode from "jwt-decode";




function Musclegroups() {
  
  //const user = useAuthenticatedUser();
  const user = (jwt_decode(localStorage.jwtToken));
  console.log(user);

  const [exercises, setExercises] = useState([]);
  const [eId, setEid] = useState('');
  const [eName, setEname] = useState('');
  const [viewDetails, setViewDetails] = useState(false);
  const [viewExercises, setViewExercises] = useState();
  const [filtered, setFiltered] = useState([]);

  //load all of the users exercises and store them with loadExercises
  useEffect(() => {
    loadExercises()
  }, [])

  let id = user.id;
  function loadExercises() {

    API.findAllByUserId(id)
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }

  function getExerciseId(e) {
    let id = e.currentTarget.getAttribute('data-id');
    let name = e.currentTarget.getAttribute('data-name');
    setEid(id);
    setEname(name)

    setViewDetails(true);
    
  }
  
  function getExerciseType(e) {
    let type = e.currentTarget.getAttribute('data-type');
    setViewExercises(true);
    
    console.log('type:', type);
    let allExercises = [...exercises];
    console.log('all:', allExercises)
    let filteredExercises = allExercises.filter(exercise => exercise.type === type)
    setFiltered(filteredExercises);
    
  }


  let exerciseCols = []
  if (exercises.length>0) {
    exerciseCols = filtered.reduce( (rows, key, index) =>{ 
       return (index % 3 === 0 ? rows.push([key]) 
         : rows[rows.length-1].push(key)) && rows;
     }, []);
   
  }

  
    return (
      <div className="container">
        <Container>
          <Navbar/>
        {viewExercises && !viewDetails ? 
        <div className="btn btn-light" onClick={() => setViewExercises(false)}>Go Back</div>
      : <div></div>}
  
  {!viewExercises ?
  <div>
          <Row>
            <Col size="lg-12 xl-12 mx-auto">
              <div onClick={getExerciseType} data-type='chest'>
                <CardLink onClick={getExerciseType}
                link="muscle"
                title="Chest"
                style={{ 
                        background: `url(${process.env.PUBLIC_URL}/musclegroups/chestIMG.jpg`, 
                        backgroundPosition: 'center', 
                        backgroundSize: "cover"}}/>
              </div>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
            <div onClick={getExerciseType} data-type='shoulders'>
                <CardLink
                link="muscle" 
                title="Shoulders"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/shouldersIMG.jpg)`, 
                    backgroundPosition: 'center'}}/>
            </div>
            </Col>
          </Row>
  
          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
            <div onClick={getExerciseType} data-type='back'>
                <CardLink
                link="muscle" 
                title="Back"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/backIMG.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
              </div>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
            <div onClick={getExerciseType} data-type='biceps'>
                <CardLink
                link="muscle" 
                title="Biceps"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/bicepsIMG.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </div>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
            <div onClick={getExerciseType} data-type='triceps'>
                <CardLink
                link="muscle" 
                title="Triceps"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/tricepsIMG.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
              </div>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
            <div onClick={getExerciseType} data-type='legs'>
                <CardLink
                link="muscle" 
                title="Legs"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/legsIMG.jpg)`, 
                    backgroundPosition: 'center', 
                    backgroundSize: "cover"}}/>
            </div>
            </Col>
          </Row>

          <Row> 
            <Col size="lg-12 xl-12 mx-auto">
            <div onClick={getExerciseType} data-type='core'>
                <CardLink
                link="muscle" 
                title="Core"
                style={{ 
                    background: `url(${process.env.PUBLIC_URL}/musclegroups/coreIMG.jpg)`, 
                    backgroundPosition: 'center',
                    backgroundSize: "cover"}}/>
            </div>
            </Col>
          </Row>
          </div>
          : <div></div>}

          {viewExercises && !viewDetails ?
          exerciseCols.map((row) => (

            <Row key={Math.random()}>
              {row.map (exercise => (
                <Col size="md-4 xs-12 mx-auto" key={Math.random()}>
            
            <div onClick={getExerciseId} data-id={exercise._id} data-name={exercise.name} key={exercise.id}>
            <ExerciseCard
              exercisename={exercise.name}
              exercisetype={exercise.type}
              userId={exercise.userId}
              key={exercise._id}
              id={exercise._id}>
            </ExerciseCard>
            </div>

              </Col> 
              )
              )}
            </Row> 
          ))
          :
          <div></div>
          }

          {viewDetails ? 
          <div>
          <div className="btn btn-light" onClick={() => setViewDetails(false)}>Go Back</div>
          <ExerciseDetails id={eId} name={eName}/>
        </div>
        :
        <div></div>}
        </Container>
        
      </div>
      
    );
}
  
export default Musclegroups;