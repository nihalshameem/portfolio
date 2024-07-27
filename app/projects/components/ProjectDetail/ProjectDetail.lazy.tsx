"use client"
import dynamic from "next/dynamic";
import React from "react";

const SkeletonImage = dynamic(() => import("antd/es/skeleton/Image"));
const SkeletonInput = dynamic(() => import("antd/es/skeleton/Input"));
const Space = dynamic(() => import("antd/es/space"));

const ProjectDetail = dynamic(() => import("./ProjectDetail"), {
  loading: () => (
    <Space direction="vertical" size={"large"} align="center">
      <SkeletonImage style={{ width: 1000, height: 500 }} />
      <SkeletonInput block size="large" />
      <SkeletonInput block size="large" />
    </Space>
  ),
  ssr: false,
});

export default ProjectDetail;
