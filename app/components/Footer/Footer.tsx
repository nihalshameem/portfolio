import Link from "next/link";
import React, { FC } from "react";

import { FooterWrapper } from "./Footer.styled";

import { Divider, Row, Col, Space } from "antd";
import {
  FacebookFilled,
  LinkedinFilled,
  GithubFilled,
  InstagramOutlined,
} from "@ant-design/icons";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <FooterWrapper>
    <Divider />
    <Row justify="center" align="top" gutter={[16, 24]}>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <div className="social-media">
          <h4>Nihal Shameem</h4>
        </div>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <div className="info-section">
          <h4>Contact Information and CV</h4>
        </div>
      </Col>
    </Row>
    <Row justify="center" align="bottom" gutter={[16, 24]}>
      <Col
        xs={24}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="social-media-links-col"
      >
        <Space className="social-media-links" size={"large"}>
          <Link href={"https://www.facebook.com/mohamed.kani.967422/"}>
            <FacebookFilled />
          </Link>
          <Link href={"https://www.linkedin.com/in/nihal-shameem-b02798187/"}>
            <LinkedinFilled />
          </Link>
          <Link href={"https://github.com/nihalshameem"}>
            <GithubFilled />
          </Link>
          <Link href={"https://www.instagram.com/nihal_sha_me_em/"}>
            <InstagramOutlined />
          </Link>
        </Space>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} className="info-section-col">
        <Space
          direction="vertical"
          size={"large"}
          className="info-section-details"
        >
          <Link href="/resume.pdf" download={true} target="_blank">
            Download CV
          </Link>
          <Link href={"https://maps.app.goo.gl/RYSjchpi5RgzdTkd8"}>
            Now in Chennai, India
          </Link>
          <Link href={"mailto:nihalportfolio@nihalshameem.com"}>
            nihalportfolio@nihalshameem.com
          </Link>
          <Link href={"mailto:nihalshameem6@gmail.com"}>
            nihalshameem6@gmail.com
          </Link>
        </Space>
      </Col>
    </Row>
  </FooterWrapper>
);

export default Footer;
