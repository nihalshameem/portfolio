import React, { FC } from "react";

import { ProjectDetailWrapper } from "./ProjectDetail.styled";

import MainImg from "@/app/assets/images/p1_1.png";
import Image from "next/image";
import { Col, Flex, Row } from "antd";

interface ProjectDetailProps {}

const ProjectDetail: FC<ProjectDetailProps> = () => (
  <ProjectDetailWrapper>
    <Image src={MainImg} alt="main" className="main-img" />
    <p className="content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem omnis
      nam quam quia exercitationem minima ipsa nisi quidem, voluptate
      consequuntur reprehenderit, incidunt qui asperiores voluptates sunt.
      Dolorum ea molestiae quisquam? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Placeat hic, exercitationem laborum doloremque amet
      beatae aut molestiae aperiam nobis inventore autem vitae culpa, natus nemo
      nihil, quam mollitia quod et. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Autem libero natus exercitationem animi illum cumque,
      voluptate nisi numquam perspiciatis quas rerum optio dolorum tempore
      eveniet asperiores veritatis consequatur rem quibusdam.
    </p>
    <Row gutter={[50, 24]} justify="center">
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="image-container">
          <Image src={MainImg} alt="extra1" className="extra-img" />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="image-container">
          <Image src={MainImg} alt="extra2" className="extra-img" />
        </div>
      </Col>
    </Row>
    <p className="content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem omnis
      nam quam quia exercitationem minima ipsa nisi quidem, voluptate
      consequuntur reprehenderit, incidunt qui asperiores voluptates sunt.
      Dolorum ea molestiae quisquam? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Placeat hic, exercitationem laborum doloremque amet
      beatae aut molestiae aperiam nobis inventore autem vitae culpa, natus nemo
      nihil, quam mollitia quod et. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Autem libero natus exercitationem animi illum cumque,
      voluptate nisi numquam perspiciatis quas rerum optio dolorum tempore
      eveniet asperiores veritatis consequatur rem quibusdam.
    </p>
  </ProjectDetailWrapper>
);

export default ProjectDetail;
