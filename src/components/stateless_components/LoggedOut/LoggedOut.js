import React from 'react'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const LoggedOut = () => {
    return(
        <Container>
            <Row style={{marginTop: "50px"}}>
                    <h3>You are not logged in, pls login</h3>
            </Row>
        </Container>
    )
}


export default LoggedOut; 