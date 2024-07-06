import dynamic from "next/dynamic";
import React from "react";

import { Flex, Skeleton, Space } from "antd";

const NavBar = dynamic(() => import("./NavBar"), {
  loading: () => (
    <Flex justify="space-between" align="center">
      <Skeleton.Button shape="default" size="large" />
      <Space size={10} className="nav-elements">
        <Skeleton.Input />
        <Skeleton.Input />
        <Skeleton.Input />
        <Skeleton.Avatar shape="circle" />
      </Space>
    </Flex>
  ),
  ssr: false,
});

export default NavBar;
