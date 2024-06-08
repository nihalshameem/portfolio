import React, { FC } from "react";
import { ShortIntroWrapper } from "./ShortIntro.styled";
import Image from "next/image";
import { Flex, Space } from "antd";

import Photo from "../../assets/images/myPhoto.png";

interface ShortIntroProps {}

const ShortIntro: FC<ShortIntroProps> = () => (
  <ShortIntroWrapper>
    <Flex
      justify="center"
      align="center"
      gap={100}
      style={{ minHeight: "600px" }}
    >
      <div className="intro">
        <h4 className="title">Hi there! 👋🏼</h4>
        <p className="content">
          I&apos;m Nihal Shameem , a Senior Software Engineer with 5 years of
          experience in crafting innovative and scalable software solutions.
          Let&apos;s build something amazing together!
        </p>
      </div>
      <div className="circle-container">
        <div className="circle">
          <Image
            src={Photo}
            alt="pic"
            className="circle-image innner"
            priority
          />
        </div>
        <Image src={Photo} alt="pic" className="circle-image" priority />
      </div>
    </Flex>
  </ShortIntroWrapper>
);

export default ShortIntro;
