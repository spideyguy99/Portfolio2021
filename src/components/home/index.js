import React from "react";
import {Jumbotron} from "react-bootstrap";
import CarouselContainer from "./carousel";

import Regatta from '../assets/images/regatta.jpg';

export default function Home(){
    return(
        <div className={"pageHolder"}>
            <Jumbotron className={"jumbo"} id={"topjumbo"}>
                <div id={"elevatedImg"}>
                    <CarouselContainer/>
                </div>
                <h2>Welcome to my online Portfolio!</h2>
            </Jumbotron>
            <Jumbotron className={"jumbo"}>
                <img src={Regatta} alt={"Regatta"} className={"homeImg"} id={"elevatedImg"}/>
            </Jumbotron>
        </div>
    );
}