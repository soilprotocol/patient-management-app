import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'; 
import Container from 'react-bootstrap/Container';

class PatientDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: ""
        }
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search); 
        let patient = ""; 
        for(let param of query.entries()) {
            patient = param[0]; 
        } 
        console.log(patient);
        this.setState({
            patient: patient
        })
    }

    componentDidMount() {
        console.log(this.state); 
    }
    



    render() {
        return (
            <Container>
                <Row>
                    <Col md="4" style={{backgroundColor: "blue"}}><img src="https://malte18.solid.community/profile/Bildschirmfoto%202018-07-27%20um%2016.22.46.png" width="20%"/></Col>
                    <Col md="8" style={{backgroundColor: "red"}}><h1>patient name</h1></Col>
                </Row>
                <Row style={{backgroundColor:'green'}}>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
                <Row style={{backgroundColor:'red'}}>
                    <Col sm={8} lg={true}>sm=8</Col>
                    <Col sm={4} lg={true}>sm=4</Col>
                </Row>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row>
            </Container>
        )
    }

}

export default PatientDetails;