import React from "react"; 
import PatientList from '../Patient/PatientList'; 
import Container from 'react-bootstrap/Container'; 


const Dashboard = () => {
    return (
        <Container>
            <PatientList /> 
        </Container>
    )
}

export default Dashboard; 