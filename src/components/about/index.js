import React from "react";
import {Jumbotron} from "react-bootstrap";

import Music from "./music";
import Games from "./games";
import Movies from "./movies";


export default function About(){
    return(
        <div className={"pageHolder"}>
            <Jumbotron className={"jumbo"} id={"aboutJumbo"}>
                <h2 style={{width:"100%"}}>Who is Noah Furniss?</h2>
                <Jumbotron className={"jumboL1"} id={"aboutL1"}>
                    <div>
                        <h3>
                            Some Fun Facts About Me!
                        </h3>
                        <div id={"break"}/>
                    </div>
                    <ul>
                        <li>I have a black belt in Goju Ryu</li>
                        <li>I am an Advanced Repair Agent for Geek Squad</li>
                        <li>I am VP of the Ultimate Frisbee Club at IUPUI</li>
                        <li>I have marched on Lucas Oil for the Fishers HS Marching Band</li>
                        <li>My favorite pizza is Pineapple pizza >:)</li>
                    </ul>
                </Jumbotron>
                <Jumbotron className={"jumboL1"} id={"aboutL1"}>
                    <h3>
                        The Site I am currently working on!
                    </h3>
                    <div id={"break"}/>
                    <button
                        target={"_blank"}
                        href={"https://et.iupui.edu/"}
                    >
                        Engineering and Technology
                    </button>
                </Jumbotron>
            </Jumbotron>
            <Music/>
            <Games/>
            <Movies/>
        </div>
    );
}