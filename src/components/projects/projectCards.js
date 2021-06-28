import React from "react";
import {Jumbotron, Card} from "react-bootstrap";

import HomeworkList from '../assets/data/cssClasswork'

export default function ProjectCards(){
    return(
        <div>
            <Jumbotron className={"jumboL1"}>
                <h3>Advanced CSS Coursework</h3>
                <div className={"projectCardHolder"}>
                    {HomeworkList.map(item => (
                            <Card className={"projectCard"}>
                                <a href={item.url}>
                                <Card.Img variant={"top"} src={item.img}/>
                                <Card.Body>
                                    <Card.Title>
                                        {item.name}
                                    </Card.Title>
                                </Card.Body>
                                </a>
                            </Card>
                    ))}
                </div>
            </Jumbotron>
        </div>
    )
}