"use client";
import React, { FC } from "react";

import ProjectPageHead from "../components/ProjectPageHead/ProjectPageHead.lazy";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail.lazy";

interface UserPageProps {}

const PortfolioPage: FC<UserPageProps> = () => {
  return (
    <>
      <ProjectPageHead
        title="Nihal Shameem's Portfolio"
        content="A modern and responsive portfolio website showcasing my expertise in full-stack development, featuring a collection of my projects, skills, and professional journey. Built using React, Next.js, and TypeScript to deliver a seamless user experience."
      />
      <ProjectDetail />
      {/* implement after making it dynamic */}
      {/* <MoreProjects /> */}
    </>
  );
};

export default PortfolioPage;
