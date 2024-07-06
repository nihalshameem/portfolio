import Image from "next/image";
import React, { FC } from "react";

import { ContactCarouselWrapper } from "./ContactCarousel.styled";

import { Carousel } from "antd";

import Img1 from "@/app/assets/images/img1.jpeg";
import Img2 from "@/app/assets/images/about1.jpeg";

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
        <Image src={Img1} alt="_image" priority objectFit="cover" />
      </div>
      <div className="carousel-item">
        <Image src={Img2} alt="_image" priority objectFit="cover" />
      </div>
    </Carousel>
  </ContactCarouselWrapper>
);

export default ContactCarousel;
