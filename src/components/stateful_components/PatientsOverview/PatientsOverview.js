import React, { Component } from 'react';

class PatientsOverview extends Component {

    state = {

    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser = () => {
        auth.trackSession(session => {
            if (!session) {
                console.log("You are not logged in");
            } else {
                const webId = session.webId;
                console.log(webId);

                const store = rdf.graph();

                this.setState({
                    webId: webId
                });
            }
        });
    };


    sendNotification = () => {
        const inboxAddress = this.state.webId.replace("profile/card#me", "inbox");

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
            this.state.webId.replace("profile/card#me", "health/") +
            `>;
              PREQ:requestFrom <` +
            window.location.href +
            `>.
            `; //Needs to be updated with domain of hosted dr marten page

        //When deleting use DELETE instead of INSERT
        const options = {
            noMeta: true,
            contentType: "text/turtle",
            body: createTurtle
        };
        fetcher.webOperation("POST", inboxAddress, options);
    };


    render() {



    }
}

export default PatientsOverview;