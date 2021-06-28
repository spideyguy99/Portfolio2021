import React from "react";
import {Jumbotron} from "react-bootstrap";

export default function Skills(){
    return(
        <div>
            <Jumbotron className={"jumboL1"} >
                <h2>Skills</h2>
                <div id={"break"}/>
                <div id={"skillHolder"}>
                    <div className={"skill"}>
                        <h4>Programming Languages</h4>
                        <ul>
                            <li>JavaScript</li>
                            <ul>
                                <li>Vue</li>
                                <li>JQuery</li>
                            </ul>
                            <li>React JS</li>
                            <ul>
                                <li>Material UI</li>
                                <li>Redux</li>
                                <li>Firebase</li>
                            </ul>
                            <li>React Native</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>Visual Basic</li>
                        </ul>
                    </div>
                    <div className={"skill"}>
                        <h4>Software</h4>
                        <ul>
                            <li>Microsoft Office Suite</li>
                            <ul>
                                <li>Word</li>
                                <li>Powerpoint</li>
                                <li>Excel</li>
                            </ul>
                            <li>Adobe Suite</li>
                            <ul>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                                <li>Premiere</li>
                            </ul>
                            <li>GitHub</li>
                            <li>Netlify</li>
                            <li>Google Firebase</li>
                        </ul>
                    </div>
                    <div className={"skill"}>
                        <h4>Operating Systems</h4>
                        <ul>
                            <li>Windows 10</li>
                            <li>MacOS</li>
                            <li>Linux (Ubuntu)</li>
                        </ul>
                    </div>
                    <div className={"skill"}>
                        <h4>IDE's</h4>
                        <ul>
                            <li>WebStorm</li>
                            <li>Codepen</li>
                            <li>Brackets</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}