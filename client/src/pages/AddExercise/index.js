import React from 'react';
import Navbar from '../../components/Navbar';
import AddExerciseForm from '../../components/AddExerciseForm/index';
import { Container, Row, Col } from "../../components/Grid"

function AddExercise () {

    return (
        <div>
            <Navbar/>
            <Container>
                <Row>
                    <Col size="lg-12 xl-12 mx-auto">
                        <AddExerciseForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AddExercise;