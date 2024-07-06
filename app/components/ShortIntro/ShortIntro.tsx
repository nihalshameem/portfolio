import React, { FC } from "react";

import { ShortIntroWrapper } from "./ShortIntro.styled";

import { Col, Row } from "antd";

import CircledImage from "../CircledImage/CircledImage.lazy";

interface ShortIntroProps {}

const ShortIntro: FC<ShortIntroProps> = () => (
  <ShortIntroWrapper>
    <div className="not-small-d">
      <Row
        justify={"center"}
        align={"middle"}
        className="intro-row"
        gutter={50}
      >
        <Col span={12}>
          <div className="intro">
            <h4 className="title">Hi there! 👋🏼</h4>
            <p className="content">
              I&apos;m Nihal Shameem , a Senior Software Engineer with 5 years
              of experience in crafting innovative and scalable software
              solutions. Let&apos;s build something amazing together!
            </p>
          </div>
        </Col>
        <Col span={6}>
          <CircledImage />
        </Col>
      </Row>
    </div>
    <div className="small-d">
      <CircledImage />
      <div className="intro">
        <h4 className="title">Hi there! 👋🏼</h4>
        <p className="content">
          I&apos;m Nihal Shameem , a Senior Software Engineer with 5 years of
          experience in crafting innovative and scalable software solutions.
          Let&apos;s build something amazing together!
        </p>
      </div>
    </div>
  </ShortIntroWrapper>
);

export default ShortIntro;
