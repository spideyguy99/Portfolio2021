import {Jumbotron, Accordion, Card, Button} from "react-bootstrap";
import {useState} from "react";

import MusicList from '../assets/data/music';

export default function Music(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (item) => this.setState({activeItem:item}, () => this.setState({show:true}));

    return(
        <Jumbotron className={"jumbo"}>
            <Accordion>
                <div className={"toggleHolder"}>
                    <h4 style={{width:"100%"}}>Music</h4>
                    <Accordion.Toggle as={"button"} eventKey={"0"} className={"accordionHeader"}>
                        View
                    </Accordion.Toggle>
                </div>

                <Accordion.Collapse eventKey={"0"}>
                    <div className={"cardHolder"}>
                        {MusicList.map(item => (
                                <Card style={{width: "250px", margin: "15px"}}>
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