"use client"
import dynamic from "next/dynamic";
import React from "react";

const SkeletonInput = dynamic(() => import("antd/es/skeleton/Input"));
const Space = dynamic(() => import("antd/es/space"));

const ProjectPageHead = dynamic(() => import("./ProjectPageHead"), {
  loading: () => (
    <Space align="start" direction="vertical" size={20} style={{ padding: 20 }}>
      <SkeletonInput size="large" active={true} />
      <SkeletonInput size="small" active={true} />
    </Space>
  ),
  ssr: false,
});

export default ProjectPageHead;
