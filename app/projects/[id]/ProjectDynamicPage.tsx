"use client";
import React, { FC, useEffect, useRef, useState } from "react";

import {
  errMessageIns,
  ProjectDetailsInterface,
} from "@/app/utils/commonUtils";
import ProjectPageHead from "../components/ProjectPageHead/ProjectPageHead.lazy";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail.lazy";
import { coreRequest } from "@/app/utils/coreRequest";

interface ProjectDynamicPageProps {
  slug: string;
}

const ProjectDynamicPage: FC<ProjectDynamicPageProps> = ({ slug }) => {
  const initialLoad = useRef<boolean>(true);
  const [data, setData] = useState<ProjectDetailsInterface | null>(null);

  useEffect(() => {
    if (initialLoad) {
      initialLoad.current = false;
      const fetchData = async () => {
        try {
          const response = await coreRequest("project/" + slug, "GET");
          setData(response.data);
        } catch (error) {
          console.log("🚀 ~ fetchData ~ error:", errMessageIns(error));
        }
      };

      // Call the fetch function
      fetchData();
    }
  }, [slug]);

  if (data) {
    return (
      <>
        <ProjectPageHead title={data.title} content={data.shortDesc} />
        <ProjectDetail data={data} />
      </>
    );
  } else {
    return <div>Error fetching data</div>;
  }
};

export default ProjectDynamicPage;
