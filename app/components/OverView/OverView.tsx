import React, { FC } from "react";
import { OverViewWrapper } from "./OverView.styled";
import {
  GlobalOutlined,
  CodepenOutlined,
  SafetyCertificateOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";

interface OverViewProps {}

const OverView: FC<OverViewProps> = () => (
  <OverViewWrapper>
    <Row gutter={[16, 24]} justify="center">
      <Col xs={24} sm={24} md={12} lg={10} xl={10}>
        <h4>Overview</h4>
        <div className="card">
          <GlobalOutlined className="icons" />
          <p className="title">Professional Summary</p>
          <p className="content">
            Senior Software Engineer with 5 years of experience specializing in
            full-stack development and cloud computing. Proficient in HTML, CSS,
            JavaScript, MySQL, MongoDB, Node.js, Express.js, Laravel, Git,
            React, TypeScript, Next.js, Jira, and Bitbucket. I excel in creating
            scalable, robust software solutions that meet business needs and
            exceed user expectations.
          </p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={10} xl={10} className="marginalble-col">
        <div className="card">
          <CodepenOutlined className="icons" />
          <p className="title">Skills</p>
          <p className="content">
            Programming Languages: HTML, CSS, JavaScript, TypeScript Frontend
            Development: React, Next.js Backend Development: Node.js,
            Express.js, Laravel Databases: MySQL, MongoDB Version Control: Git
            Project Management Tools: Jira Version Control Platforms: Bitbucket
          </p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={10} xl={10}>
        <div className="card">
          <SafetyCertificateOutlined className="icons" />
          <p className="title">Certifications and Awards</p>
          <p className="content">
            Employee of the Month Certificate, Novac Technology Solutions:
            Recognition for outstanding performance and contributions to SGI
            project.
          </p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={10} xl={10}>
        <div className="card">
          <ExperimentOutlined className="icons" />
          <p className="title">Experience</p>
          <p className="content">
            I am a Senior Software Engineer with 5 years of experience at Novac
            Technology Solutions.
          </p>
        </div>
      </Col>
    </Row>
  </OverViewWrapper>
);

export default OverView;
