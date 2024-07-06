import Image from "next/image";
import React, { FC } from "react";

import { CircledImageWrapper } from "./CircledImage.styled";

import Photo from "../../assets/images/myPhoto.png";

interface CircledImageProps {}

const CircledImage: FC<CircledImageProps> = () => (
  <CircledImageWrapper>
    <div className="circle-container">
      <div className="circle">
        <Image src={Photo} alt="pic" className="circle-image innner" priority />
      </div>
      <Image src={Photo} alt="pic" className="circle-image" priority />
    </div>
  </CircledImageWrapper>
);

export default CircledImage;
