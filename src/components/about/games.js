import {Jumbotron, Accordion, Card, Button} from "react-bootstrap";
import {useState} from "react";

import GamesList from "../assets/data/games";

export default function Games(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (item) => this.setState({activeItem:item}, () => this.setState({show:true}));

    return(
        <Jumbotron className={"jumbo"}>
            <Accordion>
                <div className={"toggleHolder"}>
                    <h4 style={{width:"100%"}}>Games</h4>
                    <Accordion.Toggle as={"button"} eventKey={"0"} className={"accordionHeader"}>
                        View
                    </Accordion.Toggle>
                </div>

                <Accordion.Collapse eventKey={"0"}>
                    <div className={"cardHolder"}>
                        {GamesList.map(item => (
                            <Card style={{width: "250px", margin: "15px"}}>
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