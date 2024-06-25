import dynamic from "next/dynamic";
import React from "react";

import { Skeleton, Space } from "antd";

const ProjectDetail = dynamic(() => import("./ProjectDetail"), {
  loading: () => (
    <Space direction="vertical" size={"large"} align="center">
      <Skeleton.Image style={{ width: 1000, height: 500 }} />
      <Skeleton.Input block size="large" />
      <Skeleton.Input block size="large" />
    </Space>
  ),
  ssr: false,
});

export default ProjectDetail;
