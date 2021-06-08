import React from "react";
import {Jumbotron} from "react-bootstrap";

import UltTeam from '../assets/images/ultTeam.JPG';
import BaseLine from '../assets/images/bassline.JPG';
import Paintball from '../assets/images/paintball.JPG';

export default function Activities(){
    return(
        <div>
            <Jumbotron className={"jumboL1"}>
                <h2>Activites</h2>
                <div className={"activity"} id={"elevatedImg"}>
                    <h4>Ultimate Frisbee</h4>
                    <p>Club Vice President</p>
                    <img
                        className={"activitiesImage"}
                        src={UltTeam}
                    />
                </div>
                <div className={"activity"} id={"elevatedImg"}>
                    <h4>Marching Band</h4>
                    <p>Percussion: Bass Line & Quads</p>
                    <img
                        className={"activitiesImage"}
                        src={BaseLine}
                    />
                </div>
                <div className={"activity"} id={"elevatedImg"}>
                    <h4>Paintball</h4>
                    <p>Just a fun hobby I enjoy... maybe a little too much</p>
                    <img
                        className={"activitiesImage"}
                        src={Paintball}
                    />
                </div>
            </Jumbotron>
        </div>
    );
}