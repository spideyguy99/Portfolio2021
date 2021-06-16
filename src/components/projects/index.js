import React from "react";
import {Jumbotron} from "react-bootstrap";

import ProjectCards from "./projectCards";

export default function Projects(){
    return(
        <div className={"pageHolder"}>
            <Jumbotron className={"jumbo"}>
                <h2>Projects</h2>

                <ProjectCards/>

                <Jumbotron className={"jumboL1"}>
                    <h2>I also have a CodePen!</h2>
                    All homeworks are JavaScript, 100 and 200 level classes

                    <button  target={"_blank"} href={"https://codepen.io/NFurniss"} style={{margin: 20, height: 50}}>
                        CodePen
                    </button>
                </Jumbotron>

            </Jumbotron>

        </div>
    );
}