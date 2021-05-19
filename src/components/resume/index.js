import React from "react";
import {Jumbotron} from "react-bootstrap";

import Skills from "./skills";
import WorkExperience from "./workExperience";
import Education from "./education";
import Activities from "./activities";

export default function Resume(){
    return(
        <div className={"pageHolder"}>
            <Jumbotron className={"jumbo"}>
                <h2>Resume</h2>
                <Jumbotron className={"jumboL1"}>
                    <h2>
                        My Objective as a Professional Web Developer
                    </h2>
                    <p>
                        To constantly expand my knowledge and proficiency with any and all tools that allow me to create and maintain professional websites.
                    </p>
                </Jumbotron>
                <Education/>
                <WorkExperience/>
                <Skills/>
                <Activities/>
            </Jumbotron>
        </div>
    );
}