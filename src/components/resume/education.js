import React from "react";
import {Jumbotron} from "react-bootstrap";

export default function Education(){
    return(
        <div>
            <Jumbotron className={"jumboL1"}>
                <h2>Education</h2>
                <div style={{width: 600, margin: 20}}>
                    <h4>
                        Indiana University Purdue University Indianapolis - IUPUI
                    </h4>
                    <p>Purdue School of Engineering and Technology </p>
                    <p>Bachelor of Science Computer and Information Technology</p>
                    <p>Concentration: Web/Application Development</p>
                </div>

                <div style={{width: "100%", margin: 20}}>
                    <h4>
                        Indiana University Kokomo
                    </h4>
                    <p>Indiana University School of Sciences</p>
                    <p>Bachelor of Science New Media</p>
                </div>

                <div style={{width: "100%", margin: 20}}>
                    <h4>
                        Fishers High School
                    </h4>
                    <p>Core 40</p>
                </div>

            </Jumbotron>
        </div>
    );
}