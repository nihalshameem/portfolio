import dynamic from "next/dynamic";
import React from "react";

import { Skeleton, Space } from "antd";

const ProjectPageHead = dynamic(() => import("./ProjectPageHead"), {
  loading: () => (
    <Space align="start" direction="vertical" size={20} style={{ padding: 20 }}>
      <Skeleton.Input size="large" active={true} />
      <Skeleton.Input size="small" active={true} />
    </Space>
  ),
  ssr: false,
});

export default ProjectPageHead;
