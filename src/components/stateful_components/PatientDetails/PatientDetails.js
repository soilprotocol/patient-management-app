import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class PatientDetails extends Component {

    state = {

    }

    render() {
        return (
            <Container>
                <Row style={{marginTop: "50px"}}>
                    <h1>this is patient detail page</h1>
                </Row>
            </Container>
        )
    }

}

export default PatientDetails;