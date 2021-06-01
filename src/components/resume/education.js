import React from "react";
import {Jumbotron} from "react-bootstrap";

export default function Education(){
    return(
        <div>
            <Jumbotron className={"jumboL1"}>
                <h2>Education</h2>
                <div id={"break"}/>
                <div className={"education"}>
                    <h4>
                        Indiana University Purdue University Indianapolis - IUPUI
                    </h4>
                    <p>Purdue School of Engineering and Technology </p>
                    <p>Bachelor of Science Computer and Information Technology</p>
                    <p>Concentration: Web/Application Development</p>
                </div>

                <div className={"education"}>
                    <h4>
                        Fishers High School
                    </h4>
                    <p>Core 40</p>
                </div>

            </Jumbotron>
        </div>
    );
}