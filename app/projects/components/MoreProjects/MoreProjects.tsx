import React, { FC } from "react";

import { MoreProjectsWrapper } from "./MoreProjects.styled";

import { Col, Row } from "antd";

import ProjectCards from "../ProjectCards/ProjectCards.lazy";
import Img1 from "@/app/assets/images/portfolio/main.png";

interface MoreProjectsProps {}

const MoreProjects: FC<MoreProjectsProps> = () => (
  <MoreProjectsWrapper>
    <h4>More Projects</h4>
    <Row gutter={[16, 24]} justify="center">
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <ProjectCards
          title="portfolio"
          content="lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eos, voluptatibus, quo nisi accusantium fuga est sit aliquid officiis vero fugit quas veniam inventore eveniet unde modi vitae totam fugiat?"
          img={Img1}
          link="/projects/portfolio"
        />
      </Col>
    </Row>
  </MoreProjectsWrapper>
);

export default MoreProjects;
