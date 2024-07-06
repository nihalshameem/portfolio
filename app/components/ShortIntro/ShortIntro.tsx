import React, { FC } from "react";

import { ShortIntroWrapper } from "./ShortIntro.styled";

import { Col, Row } from "antd";

import CircledImage from "../CircledImage/CircledImage.lazy";

interface ShortIntroProps {}

const ShortIntro: FC<ShortIntroProps> = () => (
  <ShortIntroWrapper>
    <Row
      justify="center"
      className="intro-row"
      gutter={[16, 24]}
    >
      <Col xs={24} sm={24} md={12} lg={10} xl={10}>
        <div className="intro">
          <h4 className="title">Hi there! 👋🏼</h4>
          <p className="content">
            I&apos;m Nihal Shameem, a Senior Software Engineer with 5 years of
            experience in crafting innovative and scalable software solutions.
            Let&apos;s build something amazing together!
          </p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={10} xl={10}>
        <CircledImage />
      </Col>
    </Row>
  </ShortIntroWrapper>
);

export default ShortIntro;
