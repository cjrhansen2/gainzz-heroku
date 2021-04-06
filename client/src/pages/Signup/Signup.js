import React from 'react';
import SignUpCard from '../../components/SignUpCard';
import { Container, Row, Col } from "../../components/Grid"

function Signup () {

    return (
        <div>
            <Container>
                <Row>
                    <Col size="lg-12 xl-12 mx-auto">
                        <SignUpCard/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup;