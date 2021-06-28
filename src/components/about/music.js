import {Jumbotron, Accordion, Card} from "react-bootstrap";

import MusicList from '../assets/data/music';

export default function Music(){

    return(
        <Jumbotron className={"jumbo"}>
            <Accordion>
                <div className={"toggleHolder"}>
                    <Accordion.Toggle as={"div"} eventKey={"0"} className={"accordionHeader"}>
                        <h4 style={{width:"100%"}}>Music</h4>
                    </Accordion.Toggle>
                </div>

                <Accordion.Collapse eventKey={"0"}>
                    <div className={"cardHolder"}>
                        {MusicList.map(item => (
                                <Card className={"aboutCard"}>
                                    <Card.Img variant={"top"} src={item.img} style={{height:"250px"}}/>
                                    <Card.Header>
                                        <Card.Title style={{height:"50px"}}>{item.artist}</Card.Title>
                                    </Card.Header>
                                </Card>
                        ))}
                    </div>
                </Accordion.Collapse>
            </Accordion>
        </Jumbotron>
    )
}