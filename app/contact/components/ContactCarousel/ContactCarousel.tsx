import Image from "next/image";
import React, { FC } from "react";

import { ContactCarouselWrapper } from "./ContactCarousel.styled";

import { Carousel } from "antd";


interface ContactCarouselProps {}

const ContactCarousel: FC<ContactCarouselProps> = () => (
  <ContactCarouselWrapper>
    <Carousel
      autoplay
      infinite={true}
      autoplaySpeed={5000}
      className="carousel"
      dots={false}
      dotPosition="left"
    >
      <div className="carousel-item">
        <Image src="/images/img1.jpeg" alt="_image" priority width={500} height={500}/>
      </div>
      <div className="carousel-item">
        <Image src="/images/about1.jpeg" alt="_image" priority width={500} height={500}/>
      </div>
    </Carousel>
  </ContactCarouselWrapper>
);

export default ContactCarousel;
