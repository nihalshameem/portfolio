import dynamic from "next/dynamic";
import React from "react";

import { Skeleton } from "antd";

const Footer = dynamic(() => import("./Footer"), {
  loading: () => (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Skeleton.Input size="large" />
        <div style={{ display: "flex", gap: 20 }}>
          <Skeleton.Avatar shape="circle" size={"small"} />
          <Skeleton.Avatar shape="circle" size={"small"} />
          <Skeleton.Avatar shape="circle" size={"small"} />
          <Skeleton.Avatar shape="circle" size={"small"} />
        </div>
      </div>
      <Skeleton style={{ direction: "rtl", width: 200 }} />
    </div>
  ),
  ssr: false,
});

export default Footer;
