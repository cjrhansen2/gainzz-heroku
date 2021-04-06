import React from 'react';
import SignInCard from '../../components/SignInCard';
import { Container, Row, Col } from "../../components/Grid"

function Signin () {

    return (
        <div>
            <Container>
                <Row>
                    <Col size="lg-12 xl-12 mx-auto">
                        <SignInCard/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Signin;