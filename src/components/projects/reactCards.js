import React from "react";
import {Jumbotron, Card} from "react-bootstrap";

import reactWork from '../assets/data/reactClasswork'

export default function reactCards(){
    return(
        <div>
            <Jumbotron className={"jumboL1"}>
                <h3>Advanced React Coursework</h3>
                <div id={"break"}/>
                <div className={"projectCardHolder"}>
                    {reactWork.map(item => (
                        <Card className={"projectCard"}>
                            <a href={item.url}>
                                <Card.Img variant={"top"}  style={{objectFit:"cover", objectPosition:"top", height:"150px"}} src={item.img}/>
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