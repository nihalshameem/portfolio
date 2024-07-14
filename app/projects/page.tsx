"use client";
import React, { useEffect, useRef, useState } from "react";

import { Col, Row } from "antd";

import ProjectPageHead from "./components/ProjectPageHead/ProjectPageHead.lazy";
import ProjectCards from "./components/ProjectCards/ProjectCards.lazy";
import { errMessageIns } from "../utils/commonUtils";
import { coreRequest } from "../utils/coreRequest";

interface DataInterface {
  title: string;
  shortDesc: string;
  mainImage: string;
  slug: string;
}

export default function ProjectsPage() {
  const initialLoad = useRef<boolean>(true);
  const [data, setData] = useState<DataInterface[]>([]);

  useEffect(() => {
    if (initialLoad) {
      initialLoad.current = false;
      const fetchData = async () => {
        try {
          const response = await coreRequest("projects", "GET");
          setData(response.data);
        } catch (error) {
          console.log("🚀 ~ fetchData ~ error:", errMessageIns(error));
        }
      };

      // Call the fetch function
      fetchData();
    }
  }, []);

  return (
    <>
      <ProjectPageHead
        title="Featured Projects"
        content="Discover What I’ve Been Working On"
      />
      <Row align={"middle"} gutter={[16, 24]} justify="start">
        {/* loop projects when it get dynamic */}
        {data.map((item, i) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={8} key={i}>
            <ProjectCards
              title={item.title}
              content={item.shortDesc}
              img={item.mainImage}
              link={"/projects/" + item.slug}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
