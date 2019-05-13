import React from 'react';
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button'; 

const PatientCard = props => {
    return (
        <Card style={{width: "50rem", padding: "20px 10px 20px 20px"}}>
            <Card.Header>{props.patient}</Card.Header>
            <Card.Body>
                <Card.Title>PatientDetails</Card.Title>
                <Card.Text>Here can go some Text</Card.Text>
                <Button variant="primary">
                    Request Access 
                </Button>
            </Card.Body>
        </Card>
    ); 
}

export default PatientCard; 
