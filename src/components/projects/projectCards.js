import React from "react";
import {Jumbotron, Card} from "react-bootstrap";

import HomeworkList from '../assets/data/projects'

export default function ProjectCards(){
    return(
        <div>
            <Jumbotron className={"jumboL1"}>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    {HomeworkList.map(item => (
                        <Card style={{ width: '18rem', margin: "20px" }}>
                            <Card.Img variant={"top"} src={item.img}/>
                            <Card.Body>
                                <Card.Title>
                                    {item.name}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Jumbotron>
        </div>
    )
}