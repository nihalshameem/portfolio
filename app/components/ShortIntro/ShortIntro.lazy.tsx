import dynamic from "next/dynamic";
import React from "react";

import { Skeleton } from "antd";

const ShortIntro = dynamic(() => import("./ShortIntro"), {
  loading: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center",
        width: 1000,
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      <Skeleton />
      <Skeleton.Avatar size={200} shape="circle" />
    </div>
  ),
  ssr: false,
});

export default ShortIntro;
