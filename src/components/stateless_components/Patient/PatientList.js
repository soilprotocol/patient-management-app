import React from 'react'; 
import PatientCard from './PatientCard'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const PatientList = props => {
    const patients = props.patients

    const patientsCardMarkup = patients.map(patient => {
        return (
            <Col >
                <PatientCard patient={patient} onClick={props.onClick} /> 
            </Col>
        )
    })

    return (
        <Container>
            <Row style={{marginTop: "50px"}}>
                <h4>PatientsOverview</h4>
            </Row>
            <Row style={{marginTop: "50px"}}>
                {patientsCardMarkup}
             </Row>
        </Container>
    )
}


export default PatientList; 