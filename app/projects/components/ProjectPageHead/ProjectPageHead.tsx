import React, { FC } from "react";

import { ProjectPageHeadWrapper } from "./ProjectPageHead.styled";

interface ProjectPageHeadProps {}

const ProjectPageHead: FC<ProjectPageHeadProps> = () => (
  <ProjectPageHeadWrapper>
    <h4>Projects</h4>
    <h6>These are my projects</h6>
  </ProjectPageHeadWrapper>
);

export default ProjectPageHead;
