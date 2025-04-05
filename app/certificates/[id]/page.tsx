"use server";
import "./certificate-details.scss";

import { FC } from "react";

import CertiDetails from "./CertiDetails";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const ProjectPage: FC<ProjectPageProps> = async ({ params }) => {
  const { id } = params;

  return <CertiDetails slug={id} />;
};

export default ProjectPage;
