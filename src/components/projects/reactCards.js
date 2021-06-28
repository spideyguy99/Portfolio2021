import React from "react";
import {Jumbotron, Card} from "react-bootstrap";

import reactWork from '../assets/data/reactClasswork'

export default function reactCards(){
    return(
        <div>
            <Jumbotron className={"jumboL1"}>
                <h1>Advanced React Coursework</h1>
                <h3>Advanced CSS Coursework</h3>
                <div className={"projectCardHolder"}>
                    {reactWork.map(item => (
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