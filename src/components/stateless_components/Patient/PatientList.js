import React from 'react'; 
import PatientCard from './PatientCard'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const PatientList = () => {
    const patients = ["Malte Sielski", "Elliot Brunet"]

    const patientsCardMarkup = patients.map(patient => {
        return (
            <Col >
                <PatientCard patient={patient}/> 
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