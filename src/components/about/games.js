import {Jumbotron, Accordion, Card} from "react-bootstrap";

import GamesList from "../assets/data/games";

export default function Games(){

    return(
        <Jumbotron className={"jumbo"}>
            <Accordion>
                <div className={"toggleHolder"}>
                    <Accordion.Toggle as={"div"} eventKey={"0"} className={"accordionHeader"}>
                        <h4 style={{width:"100%"}}>Games</h4>
                    </Accordion.Toggle>
                </div>

                <Accordion.Collapse eventKey={"0"}>
                    <div className={"cardHolder"}>
                        {GamesList.map(item => (
                            <Card className={"aboutCard"}>
                                <Card.Img variant={"top"} src={item.img} style={{height:"250px"}}/>
                                <Card.Header>
                                    <Card.Title style={{height:"50px"}}>{item.name}</Card.Title>
                                </Card.Header>
                            </Card>
                        ))}
                    </div>
                </Accordion.Collapse>
            </Accordion>
        </Jumbotron>
    )
}