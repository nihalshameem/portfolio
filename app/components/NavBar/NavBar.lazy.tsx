import dynamic from "next/dynamic";
import React from "react";

import { Skeleton } from "antd";

const NavBar = dynamic(() => import("./NavBar"), {
  loading: () => (
    <Skeleton.Button block={true} shape="default" size="large" active={true} />
  ),
  ssr: false,
});

export default NavBar;
