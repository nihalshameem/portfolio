import React, { FC } from "react";

import { ProjectPageHeadWrapper } from "./ProjectPageHead.styled";

interface ProjectPageHeadProps {
  title: string;
  content: string;
}

const ProjectPageHead: FC<ProjectPageHeadProps> = ({ title, content }) => (
  <ProjectPageHeadWrapper>
    <h4>{title}</h4>
    <h6>{content}</h6>
  </ProjectPageHeadWrapper>
);

export default ProjectPageHead;
