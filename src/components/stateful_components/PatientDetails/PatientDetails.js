import React, {Component} from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image'; 
// import Container from 'react-bootstrap/Container';

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
            <div className="container z-depth-2" style={{marginTop:"50px", height: "500px"}}>
                <div class="row" style={{marginLeft:"60px"}}>
                    <div class="col s3"><img src="https://malte18.solid.community/profile/Bildschirmfoto%202018-07-27%20um%2016.22.46.png" style={{width: "100%", marginTop:"40px"}}/></div>
                    <div class="col s9" style={{ marginTop:"12px"}}><h4>Patient Name</h4></div>
                    <div class="col s9" style={{ marginTop:"12px"}}><a style={{fontSize: "20px"}}>Age:</a></div>
                    <div class="col s9" style={{ marginTop:"12px"}}><a style={{fontSize: "20px"}}>Blood Type:</a></div>
                    <div class="col s9" style={{ marginTop:"12px"}}><a style={{fontSize: "20px"}}>Other Cool Stuff:</a></div>
                </div>
            </div>
        )  
    }
}

export default PatientDetails;