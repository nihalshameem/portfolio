import dynamic from "next/dynamic";
import React from "react";

import { Skeleton, Space } from "antd";

const MoreProjects = dynamic(() => import("./MoreProjects"), {
  loading: () => (
    <Space direction="vertical" size={10}>
      <Skeleton.Image />
      <Skeleton.Input />
      <Skeleton.Input />
    </Space>
  ),
  ssr: false,
});

export default MoreProjects;
