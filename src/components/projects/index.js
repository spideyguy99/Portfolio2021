import React from "react";
import {Jumbotron} from "react-bootstrap";

import ProjectCards from "./projectCards";
import ReactCards from './reactCards';

export default function Projects(){
    return(
        <div className={"pageHolder"}>
            <Jumbotron className={"jumbo"}>
                <h2>Projects</h2>

                <ProjectCards/>
                <ReactCards/>

                <Jumbotron className={"jumboL1"}>
                    <h3>GitHub Link</h3>
                    <div id={"break"}/>
                    <div style={{width:"100%"}}>Most of my assignments are private, due to course requirements, if you want to see my code for one of my private projects send me a request!</div>
                    <button  target={"_blank"} href={"https://github.com/spideyguy99"} style={{margin: 20, height: 50}}>
                        GitHub
                    </button>
                </Jumbotron>

                <Jumbotron className={"jumboL1"}>
                    <h3>I also have a CodePen!</h3>
                    <div id={"break"}/>
                    <div style={{width:"100%"}}>All homeworks are JavaScript, 100 and 200 level classes</div>
                    <button  target={"_blank"} href={"https://codepen.io/NFurniss"} style={{margin: 20, height: 50}}>
                        CodePen
                    </button>
                </Jumbotron>

            </Jumbotron>

        </div>
    );
}