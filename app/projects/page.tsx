"use client";
import React from "react";

import { Col, Row } from "antd";

import ProjectPageHead from "./components/ProjectPageHead/ProjectPageHead.lazy";
import ProjectCards from "./components/ProjectCards/ProjectCards.lazy";
import Img1 from "@/app/assets/images/p1_1.png";

export default function ProjectsPage() {
  return (
    <>
      <ProjectPageHead
        title="Featured Projects"
        content="Discover What I’ve Been Working On"
      />
      <Row align={"middle"} gutter={[16, 24]} justify="start">
        {/* loop projects when it get dynamic */}
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <ProjectCards
            title="Nihal Shameem's Portfolio"
            content="A modern and responsive portfolio website showcasing my expertise in full-stack development, featuring a collection of my projects, skills, and professional journey. Built using React, Next.js, and TypeScript to deliver a seamless user experience."
            img={Img1}
            link="/projects/portfolio"
          />
        </Col>
      </Row>
    </>
  );
}
