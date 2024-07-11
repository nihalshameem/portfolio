import Image from "next/image";
import React, { FC } from "react";

import { AboutWrapper } from "./About.styled";

import { Row, Col } from "antd";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <AboutWrapper>
    <Row justify="space-around" align="middle" gutter={[16, 24]}>
      <Col xs={24} sm={24} md={24} lg={20} xl={20}>
        <div className="about">
          <h4 className="title">About</h4>
          <p className="sub-title">
            Senior Software Engineer at Novac Technology Solutions
          </p>
          <p className="content">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Over the past 5 years,
            I&rsquo;ve been deeply involved in web application development,
            leveraging a diverse skill set encompassing HTML, CSS, JavaScript,
            Node.js, React.js, Next.js, MERN, TypeScript, jQuery, Laravel,
            Lumen, MySQL, and MongoDB. I&rsquo;ve contributed to various
            projects, from conceptualisation to deployment, ensuring robust and
            user-friendly solutions. My experience includes building scalable
            and responsive web applications, implementing complex features, and
            optimizing performance. I&rsquo;m passionate about staying updated
            with emerging technologies and methodologies to deliver cutting-edge
            solutions that meet and exceed client expectations.
          </p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={4} xl={4}>
        <div className="image-section">
          <Image
            src="/images/about1.jpeg"
            alt="about"
            className="about-img"
            priority
            width={100}
            height={100}
          />
        </div>
      </Col>
    </Row>
  </AboutWrapper>
);

export default About;
