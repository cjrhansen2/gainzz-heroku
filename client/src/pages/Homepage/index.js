import React from "react";
import {Col, Row,Container } from '../../components/Grid'
import Navbar from '../../components/Navbar';
import CardLink from '../../components/CardLink';
import {Link} from 'react-router-dom';

function Homepage() {
  
  return (
    <div className="container">
      <Container>
        <Navbar/>
        <Row>
        <Col size="lg-12 xl-12 mx-auto">
          <Link to="/workouts">
          <CardLink 
          link="workouts"
          title="Workouts"
          style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardWorkout.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
          </Link>
        </Col>
        </Row>

        <Row>
        <Col size="lg-12 xl-12 mx-auto">
          <Link to="/create">
          <CardLink 
            link="create"
            title="Create Exercise"
            style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardCreate.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
          </Link>
        
        </Col>
        </Row>

        <Row> 
          <Col size="lg-12 xl-12 mx-auto">
          <Link to="/muscle">
          <CardLink
          link="muscle" 
          title="Muscle Groups"
          style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardMuscle.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
          </Link>
          </Col>

        </Row>

        <Row> 
          <Col size="lg-12 xl-12 mx-auto">
          <Link to="/broscience">

          <CardLink
          link="broscience" 
          title="Bro Science"
          style={{ 
              background: `url(${process.env.PUBLIC_URL}/cardimgs/cardBro.jpg)`, 
              backgroundPosition: 'center', 
              backgroundSize: "cover"}}/>
          </Link>
          
          </Col>

        </Row>
      </Container>
      
    </div>
    
  );
}

export default Homepage;
