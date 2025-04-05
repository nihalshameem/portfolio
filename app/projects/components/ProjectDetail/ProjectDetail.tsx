import Image from "next/image";
import React, { FC } from "react";

import { ProjectDetailWrapper } from "./ProjectDetail.styled";

import { Col, Row } from "antd";
import { ProjectDetailsInterface } from "@/app/utils/commonUtils";
import { imagePath } from "@/app/utils/config";
import Link from "next/link";

interface ProjectDetailProps {
  data: ProjectDetailsInterface;
}

const ProjectDetail: FC<ProjectDetailProps> = ({ data }) => (
  <ProjectDetailWrapper>
    <Image
      src={imagePath + data.mainImage}
      alt="main"
      className="main-img"
      width={500}
      height={500}
    />
    <h4>Overview</h4>
    <ul className="overview">
      <li>
        <span> Project Name:</span> {data.overview.name}
      </li>
      <li>
        <span> Technologies Used:</span> {data.overview.tech}
      </li>
      <li>
        <span> Duration:</span> {data.overview.duration}
      </li>
      <li>
        <span> Role:</span> {data.overview.role}
      </li>
    </ul>
    <h4>Project Description</h4>
    <p className="content">{data.desc}</p>
    <h4>Features</h4>
    <ul className="overview">
      {data.features.map((item, i) => (
        <li key={i}>
          <span>{item.title}:</span> {item.desc}
        </li>
      ))}
    </ul>
    <h4>Technical Details</h4>
    <ul className="overview">
      {data.technical.map((item, i) => (
        <li key={i}>
          <span>{item.title}:</span> {item.desc}
        </li>
      ))}
    </ul>
    <h4>Challenges and Solutions</h4>
    <ul className="overview">
      {data.challenge.map((item, i) => (
        <li key={i}>
          <p>
            <span>Challenge:</span> {item.title}
          </p>
          <p>
            <span>Solution: </span> {item.desc}
          </p>
        </li>
      ))}
    </ul>
    <h4>Outcome</h4>
    <p className="content">{data.outcome}</p>
    <h4>Screenshots</h4>
    {data.screenshots.map((item, i) => (
      <div key={i}>
        <h5>
          {i + 1}. <span>{item.title}: </span> {item.desc}
        </h5>
        {item.path.length > 0 && (
          <Row gutter={[50, 24]} justify="center">
            {item.path.map((image, j) => (
              <Col xs={24} sm={24} md={12} lg={8} xl={8} key={j}>
                <div className="image-container">
                  <Image
                    src={imagePath + image}
                    alt="extra1"
                    className="extra-img"
                    width={500}
                    height={500}
                  />
                </div>
              </Col>
            ))}
          </Row>
        )}
      </div>
    ))}
    <h4>Conclusion</h4>
    <p className="content">{data.conclusion}</p>
    <h4>Refernce Links</h4>
    {data?.reference?.map((item, i) => (
      <p key={i}>
        <Link href={item.link}>{item.text}</Link>
      </p>
    ))}
  </ProjectDetailWrapper>
);

export default ProjectDetail;
