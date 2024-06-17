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
      style={{ borderRadius: 5 }}
      lazyLoad="progressive"
      dotPosition="left"
    >
      <Image src={Img1} alt="_image" priority />
      <Image src={Img2} alt="_image" priority />
    </Carousel>
  </ContactCarouselWrapper>
);

export default ContactCarousel;
