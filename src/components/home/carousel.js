import React from "react";
import {Carousel} from "react-bootstrap";

import Banner from '../assets/images/banner.jpeg';
import Indy from '../assets/images/indy.jpg';
import NoahUlt from '../assets/images/noahUlt.jpg';

export default function CarouselContainer(){
    return(
        <div className={"carouselHolder"}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Indy}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={NoahUlt}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}