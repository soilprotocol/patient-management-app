import React, { Component } from 'react';
import rdf from "rdflib";
import { History } from 'react-router-dom'; 
import PatientList from '../../stateless_components/Patient/PatientList';

class PatientsOverview extends Component {

    state = {
        patients: [
            {webId:'https://aika.solid.community/profile/card#me',
            authorized : false},
            {webId:'https://malte18.solid.community/profile/card#me',
            authorized: false}
        ]
    }

    componentDidMount() {
        // this.fetchUser();
        this.fetchUserHealthData()
    }

    fetchUserHealthData = () => {
        const store = rdf.graph();
        const fetcher = new rdf.Fetcher(store);

        const healthDataPromises = this.state.patients.map((patient, index) => {

            console.log(patient, index);
            return patient.webId.replace("profile/card#me", "private/health/");

        }).map((patienHealthDataAddress, index) => {
            
            console.log(patienHealthDataAddress);
            
            return fetcher.load(patienHealthDataAddress).then(res => {
                console.log(res); 

                this.updatePatientAccessStatus(index, true);

            }).catch(err => {
                
                console.log('this is an error ' + err);

            })
        })
    }

    updatePatientAccessStatus(index, authorizationStatus) {
        let newState = {...this.state};
        newState.patients[index].authorized = authorizationStatus;
        this.setState(newState);
    }

    handleClick = (patient) => {
        console.log(patient);
        console.log('handling click event on patient card');
        if (!patient.authorized) {
            this.requestAccess(patient.webId);
        } else {
            console.log(this);
            // console.log('PROPS: ' + this.props);
            this.props.history.push({
                pathname: '/patient/detail',
                search: '?' + patient.webId
            });
        }
    }

    requestAccess = (webId) => {
        console.log("request is being build")
        console.log(webId); 
        const inboxAddress = webId.replace("profile/card#me", "inbox");

        const store = rdf.graph();
        const fetcher = new rdf.Fetcher(store);

        let createTurtle =
            `
            @prefix : <#>.
            @prefix inbox: <./>.
            @prefix solid: <http://www.w3.org/ns/solid/terms#>.
            @prefix as: <http://www.w3.org/ns/activitystreams#>.
            @prefix PREQ: <https://a-solid-web.github.io/permission-ontology/permissionrequests.rdf#> .
            
            <> a solid:Notification , as:Announce, PREQ:DataRequest;
              PREQ:requestDataType PREQ:HealthData;
              PREQ:hasIntent PREQ:DataAnalysis;
              PREQ:wasSentOn "` + (new Date().toDateString()) + `";
              PREQ:expires "` + (new Date("July 15, 2019").toDateString()) + `";
              PREQ:privacyRisklevel "high"@en;
              PREQ:financialRisklevel "high"@en;
              PREQ:legalRisklevel "medium"@en;
              PREQ:requests <` +
            webId.replace("profile/card#me", "private/health/") +
            `>;
              PREQ:requestFrom <` +
            "https://doktormartens.solid.community/profile/card#me" +
            `>.
            `; //Needs to be updated with domain of hosted dr marten page

        //When deleting use DELETE instead of INSERT
        const options = {
            noMeta: true,
            contentType: "text/turtle",
            body: createTurtle
        };
        fetcher.webOperation("POST", inboxAddress, options);
        console.log("successfully sent request"); 
    };


    render() {

        return (
            <PatientList patients={this.state.patients} onClick={this.handleClick}/>
        )
    }
}

export default PatientsOverview;
