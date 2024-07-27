import React, { FC } from "react";

import { ProjectCardsWrapper } from "./ProjectCards.styled";

import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "antd";
import { imagePath } from "@/app/utils/config";

interface ProjectCardsProps {
  title: string;
  content: string;
  link: string;
  img: any;
}

const ProjectCards: FC<ProjectCardsProps> = ({
  title = "",
  content = "",
  link = "",
  img = "",
}) => (
  <ProjectCardsWrapper>
    <Link href={link}>
      <Image
        src={imagePath + img}
        alt="image"
        priority
        width={200}
        height={200}
      />
      <p className="title">{title}</p>
      <Tooltip className="sub-title" title={content}>
        {content}
      </Tooltip>
    </Link>
  </ProjectCardsWrapper>
);

export default ProjectCards;
