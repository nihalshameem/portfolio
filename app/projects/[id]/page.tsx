import { FC } from "react";

import ProjectDynamicPage from "./ProjectDynamicPage";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return [{ id: "portfolio" }, { id: "weather-dashboard" }];
}

const ProjectPage: FC<ProjectPageProps> = async ({ params }) => {
  const { id } = params;

  return <ProjectDynamicPage slug={id} />;
};

export default ProjectPage;
