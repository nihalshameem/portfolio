import React, { FC } from "react";

import { AboutWrapper } from "./About.styled";

import { Flex } from "antd";

import aboutImg from "../../../assets/images/about1.jpeg";
import Image from "next/image";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <AboutWrapper>
    <Flex justify="space-between" align="center">
      <div className="about">
        <h4 className="title">About</h4>
        <p className="sub-title">
          Senior Software Engineer at Novac Technology Solutions
        </p>
        <p className="content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Over the past 5 years, I&rsquo;ve
          been deeply involved in web application development, leveraging a
          diverse skill set encompassing HTML, CSS, JavaScript, Node.js,
          React.js,Next.js,MERN, typescript, jQuery, Laravel, Lumen, MySQL, and
          MongoDB. I&rsquo;ve contributed to various projects, from
          conceptualisation to deployment, ensuring robust and user-friendly
          solutions. My experience includes building scalable and responsive web
          applications, implementing complex features, and optimizing
          performance. I&rsquo;m passionate about staying updated with emerging
          technologies and methodologies to deliver cutting-edge solutions that
          meet and exceed client expectations.
        </p>
      </div>
      <Image src={aboutImg} alt="about" className="about-img" width={700} />
    </Flex>
  </AboutWrapper>
);

export default About;
