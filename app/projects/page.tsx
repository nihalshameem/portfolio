"use client";
import React from "react";

import ProjectPageHead from "./components/ProjectPageHead/ProjectPageHead.lazy";
import ProjectCards from "./components/ProjectCards/ProjectCards";
import Img1 from "@/app/assets/images/p1_1.png";
import { Col, Flex, Row } from "antd";

export default function ProjectsPage() {
  return (
    <div className="container">
      <ProjectPageHead />
      <Row align={"middle"}>
        {/* loop projects when it get dynamic */}
        <Col span={12}>
          <ProjectCards
            title="portfolio"
            content="lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eos, voluptatibus, quo nisi accusantium fuga est sit aliquid officiis vero fugit quas veniam inventore eveniet unde modi vitae totam fugiat?"
            img={Img1}
            link="/portfolio"
          />
        </Col>
      </Row>
    </div>
  );
}
