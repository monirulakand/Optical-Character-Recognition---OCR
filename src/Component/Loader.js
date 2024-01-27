import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import loader from "../Asset/image/loader-ring.svg"

class Loader extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col>
                            <div className="LoadingOverlay center-screen">
                                <img className="loader-size" src={loader} alt="loader"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loader;