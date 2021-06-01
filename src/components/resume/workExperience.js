import React from "react";
import {Jumbotron} from "react-bootstrap";

export default function WorkExperience(){
    return(
        <div>
            <Jumbotron className={"jumboL1"}>
                <h2>Experience</h2>
                <div id={"break"}/>
                <div className={"experience"}>
                    <h5>
                        Indiana University Purdue University Indianapolis: Engineering and Technology.
                    </h5>
                    <p>
                        Assistant to the Web Master
                    </p>
                    <ul>
                        <li>
                            Developed Engineering and Technology Website using Trello (Kanban)
                        </li>
                        <li>
                            Built and maintaned website using Cascade CMS
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>
                        Multidisciplinary Undergraduate Research Institute (MURI)
                    </h5>
                    <p>
                        Researcher / Developer
                    </p>
                    <ul>
                        <li>
                            Researched and Developed a mobile application with React Native
                        </li>
                        <li>
                            Present total research findings at CRL Summer Symposium at IUPUI
                        </li>
                        <li>
                            Developed application using a broken version of Agile in a small group setting
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>
                        Best Buy - Geek Squad
                    </h5>
                    <p>
                        Consultant Agent
                    </p>
                    <ul>
                        <li>
                            Consult clients on various computer, phone, and general technology issues
                        </li>
                        <li>
                            File and complete iPhone repairs through GSX (screens, batteries, back plate)
                        </li>
                    </ul>
                </div>

                <div>
                    <h5>
                        Indiana University Purdue University Indianapolis: UITS - TCC
                    </h5>
                    <p>
                        Consultant Supervisor
                    </p>
                    <ul>
                        <li>
                            Trained and oversaw consultants
                        </li>
                        <li>
                            Assisted with both First and Second Tier IT Support for IUPUI Students
                        </li>
                    </ul>
                </div>
            </Jumbotron>
        </div>
    );
}