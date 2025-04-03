import { FC } from "react";

import ProjectDynamicPage from "./ProjectDynamicPage";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const ProjectPage: FC<ProjectPageProps> = async ({ params }) => {
  const { id } = params;

  return <ProjectDynamicPage slug={id} />;
};

export default ProjectPage;
