import React from "react";
import dynamic from "next/dynamic";

import { Flex, Skeleton } from "antd";

const About = dynamic(() => import("./About"), {
  loading: () => (
    <Skeleton loading={true} active>
      <Flex justify="space-between" align="center">
        <div className="about">
          <h4 className="title"></h4>
          <p className="sub-title"></p>
          <p className="content"></p>
        </div>
      </Flex>
    </Skeleton>
  ),
  ssr: false,
});

export default About;
