import dynamic from "next/dynamic";
import React from "react";

import { Skeleton } from "antd";

const Experience = dynamic(() => import("./Experience"), {
  loading: () => <Skeleton />,
  ssr: false,
});

export default Experience;
