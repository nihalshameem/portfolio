import Link from "next/link";
import React, { FC } from "react";

import { FooterWrapper } from "./Footer.styled";

import { Divider, Flex, Space } from "antd";
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
    <Flex justify="space-between" align="flex-start">
      <div className="social-media">
        <h4>Nihal Shameem</h4>
      </div>
      <div className="info-section">
        <h4>Contact Information and CV</h4>
      </div>
    </Flex>
    <Flex justify="space-between" align="flex-end">
      <Space className="social-media-links" size={"large"}>
        <Link href={"/"}>
          <FacebookFilled />
        </Link>
        <Link href={"/"}>
          <LinkedinFilled />
        </Link>
        <Link href={"/"}>
          <GithubFilled />
        </Link>
        <Link href={"/"}>
          <InstagramOutlined />
        </Link>
      </Space>
      <Space
        direction="vertical"
        size={"large"}
        className="info-section-details"
      >
        <Link href={"/"} download={true}>
          Download CV
        </Link>
        <Link href={"/"}>Now in Chennai, India</Link>
        <Link href={"mailto:nihalshameem6@gmail.com"}>
          nihalshameem6@gmail.com
        </Link>
      </Space>
    </Flex>
  </FooterWrapper>
);

export default Footer;
