import React, { FC } from "react";

import { ProjectCardsWrapper } from "./ProjectCards.styled";

import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "antd";

interface ProjectCardsProps {
  title: string;
  content: string;
  link: string;
  img: any;
}

const ProjectCards: FC<ProjectCardsProps> = ({ title, content, link, img }) => (
  <ProjectCardsWrapper>
    <Link href={link}>
      <Image src={img} alt="image" priority />
      <p className="title">{title}</p>
      <Tooltip className="sub-title" title={content}>
        {content}
      </Tooltip>
    </Link>
  </ProjectCardsWrapper>
);

export default ProjectCards;
