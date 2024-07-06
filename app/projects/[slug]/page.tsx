"use client";
import React, { FC } from "react";

import ProjectPageHead from "../components/ProjectPageHead/ProjectPageHead.lazy";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail.lazy";
import MoreProjects from "../components/MoreProjects/MoreProjects.lazy";

interface UserPageProps {
  params: {
    slug: string;
  };
}

const UserPage: FC<UserPageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <>
      <ProjectPageHead
        title="Portofolio"
        content="This is my portfolio project"
      />
      <ProjectDetail />
      <MoreProjects />
    </>
  );
};

export default UserPage;
