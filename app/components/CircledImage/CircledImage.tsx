import Image from "next/image";
import React, { FC } from "react";

import { CircledImageWrapper } from "./CircledImage.styled";

interface CircledImageProps {}

const CircledImage: FC<CircledImageProps> = () => (
  <CircledImageWrapper>
    <div className="circle-container">
      <div className="circle">
        <Image
          src="/images/myPhoto.png"
          alt="pic"
          width={200}
          height={200}
          className="circle-image innner"
          priority
        />
      </div>
      <Image
        src="/images/myPhoto.png"
        alt="pic"
        width={200}
        height={200}
        className="circle-image"
        priority
      />
    </div>
  </CircledImageWrapper>
);

export default CircledImage;
