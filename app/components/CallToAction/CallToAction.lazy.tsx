import { Skeleton } from "antd";
import dynamic from "next/dynamic";
import React from "react";

const CallToAction = dynamic(() => import("./CallToAction"), {
  loading: () => <Skeleton />,
  ssr: false,
});

export default CallToAction;
