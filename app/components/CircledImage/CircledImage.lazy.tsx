import dynamic from "next/dynamic";
import React from "react";

import { Skeleton } from "antd";

const CircledImage = dynamic(() => import("./CircledImage"), {
  loading: () => <Skeleton.Avatar size={200} shape="circle" />,
  ssr: false,
});

export default CircledImage;
